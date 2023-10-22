$(async () => {
  $('#sortable').sortable();
  $('#sortable').disableSelection();

  const endpoint = (await chrome.storage.local.get('as_endpoint')).as_endpoint as string;

  $('#endpoint').val(endpoint);

  const titleOrder = (await chrome.storage.local.get('as_titleOrder')).as_titleOrder as string[];

  const sortableList = $('#sortable');
  $.each(titleOrder, function (i, itemId) {
    $('#' + itemId).appendTo(sortableList);
  });

  // Save button
  $('#save').on('click', async () => {
    let endpoint = $('#endpoint').val() as string;

    if (endpoint.includes('%s')) {
      await chrome.storage.local.set({
        as_endpoint: endpoint
      });
    }

    const list = $('#sortable').sortable('toArray');

    await chrome.storage.local.set({
      as_titleOrder: list
    });

    location.reload();
  });
});
