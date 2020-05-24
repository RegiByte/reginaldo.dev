import 'normalize.css'
import App from './App.html'
import marked from 'marked'
import hljs from 'highlight.js'
import './fonts/pretendo.css'
import "nes.css/css/nes.min.css";

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
})

const app = new App({
    target: document.body,
})