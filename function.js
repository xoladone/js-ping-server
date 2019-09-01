
$urlToPing = "https://example.com/aFile.xyz;

// checks if a connection exists to an url
  function isOnline($callback, $optional) {
    let $xhr = new XMLHttpRequest();
    $xhr.open('GET', $urlToPing, true);
    $xhr.setRequestHeader('Cache-Control', 'no-cache');
    $xhr.addEventListener('readystatechange', function() {
      if ($xhr.status === 200 && $xhr.readyState === 4) {
        $callback(true, $optional);
      }
      else if ($xhr.readyState ===4) {
        $callback(false, $optional);
      }
    });
    $xhr.send(null);
  }
