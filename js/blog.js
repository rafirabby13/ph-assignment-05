// valueById("blog")
// .addEventListener("click", function () {
//     window.location.href='../faq.html'
// });

// valueById("home")
// .addEventListener("click", function () {
//     window.location.href='../index.html'
//     console.log('object');
    
// });


    // Handle navigation from index.html to about.html
    let goToHome = document.getElementById('home');
    if (goToHome) {
        goToHome.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    }

    // Handle navigation from about.html to index.html
    let goToFAQ = document.getElementById('blog');
    if (goToFAQ) {
        goToFAQ.addEventListener('click', function () {
            window.location.href = '../blog.html';
        });
    }
