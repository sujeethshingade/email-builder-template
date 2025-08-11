import hljs from 'highlight.js';
import xmlHighlighter from 'highlight.js/lib/languages/xml';
import prettierPluginHtml from 'prettier/plugins/html';
import { format } from 'prettier/standalone';

hljs.registerLanguage('html', xmlHighlighter);

export async function html(value: string): Promise<string> {
  const prettyValue = await format(value, {
    parser: 'html',
    plugins: [prettierPluginHtml],
  });
  return hljs.highlight(prettyValue, { language: 'html' }).value;
}

