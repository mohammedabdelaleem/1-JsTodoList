// add new task

const myForm = document.getElementById("myForm");
const input = document.querySelector("input");

myForm.addEventListener(
  "submit",

  (eo) => {
    // Prevent the form from submitting and refreshing the page
    eo.preventDefault();

    // Get the input value
    const inputValue = input.value;

    if (inputValue === "") {
      alert("ERROR You Add Nothing");
    } else {
      // new task
      const newTask = `
   
   <div class="task flex">
    
          <i class="icon icon-star"></i>
          <p lang="ar"  class="task-title">${inputValue}</p>
          <div class="right" style="margin-right:15px;">
          <i class="icon icon-trash"></i>
          <i class="icon icon-angry2"></i>
    
          </div>
        </div>

   `;

      tasks.innerHTML += newTask;
      input.value = "";
    }
  }
);

// handle task
tasks.addEventListener(
  "click",

  (eo) => {
    switch (eo.target.className) {
      case "icon icon-star":
        eo.target.classList.add("orange");

        // make it first
        eo.target.parentElement.parentElement.prepend(eo.target.parentElement);
        break;

      case "icon icon-star orange" /*after click star , user need to return*/:
        eo.target.classList.remove("orange");

        // make it last
        eo.target.parentElement.parentElement.append(eo.target.parentElement);
        break;

      case "icon icon-trash":
        eo.target.parentElement.parentElement.remove();
        break;

      case "icon icon-angry2":
        eo.target.classList.add("in-active");

        eo.target.parentElement.parentElement
          .getElementsByClassName("task-title")[0]
          .classList.add("finished");

        const heart = `<i class="icon icon-heart" ></i>`;
        eo.target.parentElement.innerHTML += heart;

        break;

      case "icon icon-heart":
        eo.target.parentElement.parentElement
          .getElementsByClassName("task-title")[0]
          .classList.remove("finished");

        eo.target.parentElement
          .getElementsByClassName("icon-angry2")[0]
          .classList.remove("in-active");

        eo.target.remove();

        break;
    }
  }
);
