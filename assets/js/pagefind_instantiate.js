{{- $u := urls.Parse site.BaseURL -}}
window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({
        "element": "#search-with-pagefind",
        "showImages": true,
        "baseUrl": "{{ $u.Path }}",
    });
});
