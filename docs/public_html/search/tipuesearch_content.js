var tipuesearch = {"pages":[{"title":"Summary","text":"  This package is a PHP object-oriented solution for modelling data in two (rows + columns) or three dimensions (rows + columns + pages).  It can be thought of like a spreadsheet.  It allows a single data class ExportData to be used to organize your data in a grid, with various output styles Exporter so you can easily get a .csv file or a .xlsx file, among many others.  See the code for more documentation.  Requirements   &#62;= Php 5.3.0   Installation   Please install necessary dependencies using Composer. Navigate to the root of this package and type: composer install   Documentation   Refer to the Doxygene documentation included in this package.   Automated Tests   Download a copy of simpletest to the tests directory Visit tests\/all_tests.php in your browser to run all tests at once; or visit a single test file instead. If you're getting forbidden errors, take a look at the .htaccess file.   Example Usage  Building a data object  In this example we'll build a 2 paged model, the first page contains two columns (names and ages) of three people.  The second page will contain two rows of vehicle information (color and make).  $obj = new ExportData();  \/\/ By default we're on page 0, row 0. $obj-&gt;add('Name', 'Aaron')-&gt;add('Age', 39)-&gt;next(); $obj-&gt;add('Name', 'Hillary')-&gt;add('Age', 37)-&gt;next(); $obj-&gt;add('Name', 'Maia')-&gt;add('Age', 7)-&gt;next();  \/\/ Switch to page 1; we'll be placed on row 0 when the new page is created. $obj-&gt;setPage(1); $obj-&gt;add('Color', 'Black')-&gt;add('Make', 'Subaru')-&gt;next(); $obj-&gt;add('Color', 'White')-&gt;add('Make', 'Hyundai')-&gt;next();   Accessing data from the object  $obj-&gt;setPage(0)-&gt;setPointer(0)-&gt;getValue('Name') === 'Aaron' $obj-&gt;getValue('Name') === 'Aaron' $obj-&gt;setPointer(2)-&gt;getValue('Name') === 'Maia' $obj-&gt;setPointer(0)-&gt;get() === array('Name' =&gt; 'Aaron', 'Age' =&gt; 39)  $obj-&gt;setPage(1)-&gt;setPointer(1)-&gt;getValue('Color') === 'White'   Exporting data to other formats  And now to get that as a CSV file we do...  $exporter = new CSVExporter($obj); $csv_string = $exporter-&gt;export();   Or to get it as JSON...  $exporter = new JSONExporter($obj); $json_string = $exporter-&gt;export();   Or any of the other exporter classes.  Contact   In the Loft Studios Aaron Klump - Developer PO Box 29294 Bellingham, WA 98228-1294 aim: theloft101 skype: intheloftstudios d.o: aklump http:\/\/www.InTheLoftStudios.com  ","tags":"","url":"README.html"},{"title":"Tasklist","text":"  - [ ] ld--todos: a task list item @w-10 - [ ] ld--roadmap: Fix the delay caused by deleting files at beginning of compile. - [ ] ld--todos: a task list item - [ ] ld--todos: a task list item @w10 - [ ] demos--md_extra: Todo items will get aggregated automatically @w10 - [ ] ld--todos: a task list item @w10.1  ","tags":"","url":"_tasklist.html"},{"title":"Search Results","text":" ","tags":"","url":"search--results.html"}]};
