interface CreatePostRequest {
    title: string;
    body: string;
    userId: number;
};

interface PostResponse {
    id: number;
    title: string;
    body: string;
    userId: number;
};

const newPost: CreatePostRequest = {
    title: 'Aadhar card',
    body: 'Asharaf',
    userId: 659874
};

const reqUrl = 'https://jsonplaceholder.typicode.com/posts';

async function createPost() {
 try {
    const response = await fetch(reqUrl, {
    method: 'POST',
    headers: {
        'Content-Type' : "application/json"
    },
    body: JSON.stringify(newPost)
});

if(!response.ok) {
    throw new Error('Unable to create post');
}
const data: PostResponse = await response.json();
console.log(data)
 } catch (error) {
    console.error(error)
 }
}
createPost();

async function getPost() {
    try {
        const response = await fetch(reqUrl+'/1');
        if(!response.ok) {
            throw new Error('Error fetching')
        }
        const post: PostResponse[] = await response.json();
        console.log(post);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }
        }
}
//getPost();

async function updatePost() {
    await fetch(reqUrl+'/1', {
        method: "PATCH",
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({
            title: 'Title Updated'
        })
    });
}
// updatePost();
// getPost();

async function deletePost() {
    try {
        const response = await fetch(reqUrl+'/1', {
        method: "DELETE",
        });
        if(response.ok){
            console.log('Deleted Successfully')
        }else{
            throw new Error('Delete Failed')
        }
    } catch (error) {
        console.error(error);
    }
}

//deletePost();
