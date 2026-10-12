/**
 * Copies rich HTML content directly to clipboard so that pasting into Microsoft Word
 * produces a native, beautifully styled APA 7th table.
 */
export async function copyHtmlToClipboard(htmlString: string, plainTextFallback?: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.ClipboardItem) {
      const typeHtml = 'text/html';
      const typePlain = 'text/plain';
      
      const blobHtml = new Blob([htmlString], { type: typeHtml });
      const blobPlain = new Blob([plainTextFallback || htmlString.replace(/<[^>]+>/g, ' ')], { type: typePlain });
      
      const data = [new ClipboardItem({
        [typeHtml]: blobHtml,
        [typePlain]: blobPlain
      })];
      
      await navigator.clipboard.write(data);
      return true;
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = plainTextFallback || htmlString;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    }
  } catch (err) {
    console.error('Failed to copy html table:', err);
    return false;
  }
}
