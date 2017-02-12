
$( document ).ready(function() {
    $('#editorBtn').click(function() {
        if (chrome.runtime.openOptionsPage) {
        // New way to open options pages, if supported (Chrome 42+).
            chrome.runtime.openOptionsPage();
        } else {
        // Reasonable fallback.
            window.open(chrome.runtime.getURL('snipper-loader.html'));
        }
    });

    $('#editArea').on('change', function(){
        $('#editArea').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
   
});
