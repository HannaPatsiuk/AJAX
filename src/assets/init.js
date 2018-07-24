// console.log('init');

// var data;

// fetch('http://www.mocky.io/v2/5b4f785e3600005600dd0b41')
//     .then(function(res) {
//         if (response.status >= 200 && response.status < 300) {
//             return response.json()
//         } else {
//             var error = new Error(response.statusText)
//             throw error
//         }
//     }).then(function(data){
//         console.log(data)
//     }).catch(function(error){
//         console.log(error)
//     })

//     var buildComment = function(commentData) {
//     var $post = $('<div class="post"></div>')
//     $post.text(commentData.user);
//     return $post;
// }

// var buildComments = function(commentsData) {
//     console.log(commentsData);
//     var $comments = $('.comments');
    
//     //iteration for commentsData
//     var item = commentsData[0]
//     var $comment = buildComment(item);
//     $comments.append($comment);
// }

// fetch('http://www.mocky.io/v2/5b4f77883600006700dd0b3e')
//     .then(function(res){
//         return res.json();
//     }).then(function(data){
//         buildComments(data);
//     });

console.log('init');

var buildComment = function(comment, index, parentIndex, parentUser) {
    var $post = $('<div class="post"></div>');

    var $header = $('<div class="post__header"></div>');
    $post.append($header);

    var $number = $('<span class="post__number"></span>');
    $header.append($number);
    $number.text(index+1+". ");
    if ((comment.children) && (comment.children.length > 0)) {
    console.log("parentIndex", parentIndex);
    console.log("parentUser", parentUser);
    console.log("Index", index);
    console.log("comment", comment)
    // $number.text((parseIn(index)+1)+". "+(parseIn(parentIndex)+1);

    }


    var $content= $('<div class="post__content"></div>');

    var $image = $('<img alt="user_avatar">').attr("src", comment.avatarUrl);
    $post.append($image);

    var $nickname = $('<a class="post__nickname"></a>').text(comment.user);
    $header.append($nickname);

    $text = $('<div class="post__text"></div>');
    $post.append($text);
    $text.html(comment.content);
    
    if ((comment.children) && (comment.children.length > 0)) {
        var $subposts = $('<div class="post__subposts"></div>');
        $post.append($subposts);
        buildComments(comment.children, $subposts, index, comment.user);

    }
    return $post;
}

var buildComments = function(commentsData, $commentsContainer, parentIndex, parentUser) {
    $.each(commentsData, function(i, item){
        var $comment = buildComment(item, i, parentIndex, parentUser);
        $commentsContainer.append($comment);
    })
}

fetch('http://www.mocky.io/v2/5b4f77883600006700dd0b3e')
    .then(function(res){
        return res.json();
    }).then(function(data){
        var $comments = $('.comments');
        buildComments(data, $comments);
    });