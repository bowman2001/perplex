import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@{{ or $.Params.mermaid.version site.Data.hugoModMermaid.version "latest" }}/dist/mermaid.esm.min.mjs';
{{ $config := slice }}
{{ with site.Data.hugoModMermaid }}
    {{- range $k, $v := . -}}
        {{- $config = $config | append (printf "%q: %q" $k $v) }}
    {{- end }}
    {{ $config = delimit $config ", " }}
{{- end }}
mermaid.initialize({ startOnLoad: true {{ with $config }}, {{ . }}{{ end }} });
