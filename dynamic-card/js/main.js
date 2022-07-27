//dummy data

// const posts = [
//   {
//     title: "this is title1",
//     body: "this is body 1",
//   },
//   {
//     title: "this is title2",
//     body: "this is body 2",
//   },
//   {
//     title: "this is title3",
//     body: "this is body 3",
//   },
//   {
//     title: "this is title4",
//     body: "this is body 4",
//   },
//   {
//     title: "this is title5",
//     body: "this is body 5",
//   },
//   {
//     title: "this is title6",
//     body: "this is body 6",
//   },
//   {
//     title: "this is title7",
//     body: "this is body 7",
//   },
//   {
//     title: "this is title8",
//     body: "this is body 8",
//   },
// ];

// {/* <div class="post">
//         <h4 class="post-title">post title1</h4>
//         <p class="post-body">post description 1</p>
//       </div> */}

// fetch data

const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    throw Error("data is not fetched");
  }
};

const postElements = document.querySelector(".posts");

const loadAllData = async () => {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.body}</p>
    `;
    postElements.appendChild(postElement);
  });
};
loadAllData();
