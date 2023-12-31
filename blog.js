let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let project = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let reactJs = document.getElementById("react-js").checked;
  let nodeJs = document.getElementById("node-js").checked;
  let nextJs = document.getElementById("next-js").checked;
  let typescript = document.getElementById("typescript").checked;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);
  console.log(image);

  let nodeJsLogo = nodeJs
  let reactJsLogo = reactJs
  let nextJsLogo = nextJs
  let typescriptLogo = typescript

  let blog = {
    project,
    startDate,
    endDate,
    description,
    reactJsLogo,
    nodeJsLogo,
    nextJsLogo,
    typescriptLogo,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

 renderBlog();
 
 document.getElementById("react").hidden = !reactJs;      
 document.getElementById("node").hidden = !nodeJs;
 document.getElementById("next").hidden = !nextJs;
 document.getElementById("type").hidden = !typescript;

 document.getElementById("form-blog").reset();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);
    
    document.getElementById("contents").innerHTML += `
              <div class="card-item">
                    <div class="blog-image">
                        <img src="${dataBlog[index].image}" alt="" style="width: 100%;">
                    </div>
                    <div class="blog-content">
                        <h4 style="height: fit-content;">
                            <a href="blog-details.html">${dataBlog[index].project}</a>
                        </h4>
                        <div class="blog-details">
                        durasi : 3 bulan
                        </div>
                        <div>
                        <p style="font-size: 12px; font-weight: 400; text-align: justify;">
                            ${dataBlog[index].description}
                        </p>
                        </div>
                        <div class="application">
                            <i class="fa-brands fa-react" hidden id="react"></i>
                            <i class="fa-brands fa-node-js" hidden id="node"></i>
                            <img src="next-js.svg" alt="" id="next" style="height: 15px; width: 15px;" hidden>
                            <img src="icons8-typescript.svg" alt="" id="type" style="height: 15px; width: 15px;" hidden>
                        </div>
                        <div class="btn-group">
                            <button class="btn-edit">Edit</button>
                            <button class="btn-delete">Delete</button>
                        </div>
                    </div>
              </div>
                ` 
    
  } 
 
}