import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Roof & More home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Roof &amp; More/);
  assert.match(html, /Engineering Spaces\. Building Possibilities\./);
  assert.match(html, /Complete image library/);
  assert.match(html, /roofandmore\.studio@gmail\.com/);
  assert.match(html, /\+91 94250 62078/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("keeps verified content and local official assets wired", async () => {
  const [data, home, layout, css, footer, icon, routePage] = await Promise.all([
    readFile(new URL("../app/data.js", import.meta.url), "utf8"),
    readFile(new URL("../app/components/HomeExperience.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteFooter.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/Icon.jsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/RoutePage.jsx", import.meta.url), "utf8"),
  ]);

  assert.match(data, /Indore, Madhya Pradesh, India/);
  assert.match(data, /Dubai, UAE/);
  assert.match(data, /conflicting completed-project counts|project count editable/i);
  assert.match(data, /officialImageLibrary/);
  assert.match(home, /RoofingEstimator/);
  assert.match(home, /OfficialImageGallery/);
  assert.match(home, /RoofColorVisualizer/);
  assert.match(layout, /MotionEnhancer/);
  assert.match(layout, /industrial roofing solutions/);
  assert.match(css, /blueprint-pan|measure-sweep|reveal-item|official-gallery-grid/);
  assert.match(css, /action-icon|social-row|footer-icon-link/);
  assert.match(footer, /aria-label="Instagram"|social-link/);
  assert.match(icon, /instagram|whatsapp|mapPin/);
  assert.doesNotMatch(routePage, /Continue exploring|Related pages/);
});

test("server-renders the contact map section", async () => {
  const response = await render("/contact-us");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /office-map/);
  assert.match(html, /Madhumilan%20Square|Madhumilan Square/);
  assert.match(html, /Ibn%20Battuta%20Gate|Ibn Battuta Gate/);
  assert.match(html, /google\.com\/maps/);
  assert.match(html, /Get Directions/);
  assert.doesNotMatch(html, /Continue exploring|Related pages/);
});

test("every official gallery image exists on disk", async () => {
  const data = await readFile(new URL("../app/data.js", import.meta.url), "utf8");
  const matches = [...data.matchAll(/"(?<src>\/images\/official\/[^"]+)"/g)];
  const uniqueSources = [...new Set(matches.map((match) => match.groups.src))];

  assert.equal(uniqueSources.length, 33);
  await Promise.all(
    uniqueSources.map((src) =>
      access(new URL(`../public${src}`, import.meta.url)),
    ),
  );
});
