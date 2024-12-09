function getFilterQuery(query: BooksFeature.FilterQuery) {
    let filter = {};
    if(query?.category){
        filter = { category: {
            $regex: query.category,
            $options: "i"
        } }
    }
    return filter;
}

export {
    getFilterQuery
};

