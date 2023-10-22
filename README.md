I made a browser extension to easily search up anime from anilist

It looks awful, and I don't intend to spend any more time on it unless I have to, PR's are more than welcome

The options page is just a field for the endpoint, basically a search url for any anime streaming website that provides some url to search for stuff, something like example.com/search?q=anime+name+here

Take that url and replace the query with %s (it wont save it without it) and that's how you set that up. The %s will be replaced by the title in order of language preference which is right below the endpoint on the page

Have fun ig