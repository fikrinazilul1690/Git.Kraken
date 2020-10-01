const challenge1 = () => {
    axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            const filterComments = res.data.filter(value => {
                return value.postId == 8;
            });
            console.log({
                Nama: "Achmad Nazilul Fikri",
                dataLength: Object.keys(filterComments).length,
                data: filterComments,
            });
        });
};

const challenge2 = () => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            const filterData = res.data.filter( value =>{
                return value.userId == 8;
            });            
            console.log({
                Nama: "Achmad Nazilul Fikri",
                dataLength: Object.keys(filterData).length,
                data: filterData,
            });
        });
};