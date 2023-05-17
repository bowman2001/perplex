import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@{{ or $.Params.mermaid.version site.Data.hugoModMermaid.version "latest" }}/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true, 'theme': '{{ or $.Params.mermaid.theme site.Data.hugoModMermaid.theme "base" }}' });
