function writeTestFile(){
	var newDir, newFile;
	tizen.filesystem.resolve("documents", function(dir) 
	    {
	       newDir = dir.createDirectory("newDir");
	       newFile = newDir.createFile("newFilePath.txt");
	       newFile.openStream(
	        "w",
	        function(fs) {
	        	 fs.write("test test test");
	        	 fs.close();
	        }, function(e) {
	        	 console.log("Error " + e.message);
	        }, "UTF-8");
	    });
	console.log("OK W");
}
    
function readTestFile(){
	tizen.filesystem.resolve("documents", function(dir) 
	    {
	       file = dir.resolve("newDir/newFilePath.txt");
	       file.openStream(
	    	    "r", 
			    function(fs) {
	                var text = fs.read(file.fileSize);
	                fs.close();
	                console.log(text);
	            }, function(e) {
	                console.log("Error " + e.message);
	            }, "UTF-8");
	    });
	console.log("OK R");
}

function readBookFile(path){
	tizen.filesystem.resolve("documents", function(dir) 
	    {
	       file = dir.resolve(path);
	       file.openStream(
	    	    "r", 
			    function(fs) {
	                var text = fs.read(file.fileSize);
	                fs.close();
	                console.log(text);
	                book = document.getElementById("book_cont");
	            	book.innerHTML = text;
	            }, function(e) {
	                console.log("Error " + e.message);
	                book = document.getElementById("book_err");
	            	book.innerHTML = e.message;
	            }, "UTF-8");
	    });
	console.log("OK R");
}