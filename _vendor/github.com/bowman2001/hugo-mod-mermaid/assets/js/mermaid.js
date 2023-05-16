import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@{{ site.Params.mermaid.version }}/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true, 'theme': '{{ .Params.mermaid.theme | default site.Params.mermaid.theme }}' });
