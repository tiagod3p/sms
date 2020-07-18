const currentPageLink = location.pathname
const links =  document.querySelectorAll('header .links a')

for (let link of links) {
    console.log(currentPageLink)
    console.log(link.getAttribute('href'))
    if (currentPageLink.includes(link.getAttribute('href').substr(0,8))) 
        link.classList.add('active')  
}
// PAGINATION
function pagination(selectedPage, totalPages) { 
    // [1 ..., 4, 5, 6, 7 ... 20]
    let pages = [],
    oldPage

    const initialPage = 1

    for (let currentPage = initialPage; currentPage <= totalPages; currentPage++) {

        let firstAndLastPage = currentPage == initialPage || currentPage == totalPages
        let pagesBeforeSelected = currentPage - selectedPage >= -2
        let pagesAfterSelected = currentPage - selectedPage <= 2

        if (firstAndLastPage || pagesBeforeSelected && pagesAfterSelected) {
            if (oldPage && currentPage - oldPage > 2) {
                pages.push('...')
            }

            if (oldPage && currentPage - oldPage == 2) {
                pages.push(currentPage - 1)
            }

            pages.push(currentPage)

            oldPage = currentPage
        }
    }

    return pages

}

function createPagination(paginationClass) {
    const selectedPage = parseInt(paginationClass.dataset.page)
    const totalPages = parseInt(paginationClass.dataset.total)
    const pages = pagination(selectedPage, totalPages)

    const limitsClass = document.querySelector('.limits')
    const limit = parseInt(limitsClass.dataset.limit)
    
    const filter = paginationClass.dataset.filter

    let elementsPage = ""

    for (let page of pages) {

        if (String(page).includes('...')) {
            elementsPage+= `<span>${page}</span>`
        } 
        
        else {  
            if (filter) {
                elementsPage += `<a class = "" href="?p=${page}&filter=${filter}&limit=${limit}">${page}</a>`
            } 
            
            else {
                elementsPage += `<a class = "" href="?p=${page}&limit=${limit}">${page}</a>`
            }
        }
    }
    paginationClass.innerHTML = elementsPage    
}

const paginationClass = document.querySelector('.pagination')
if (paginationClass) {
    createPagination(paginationClass)
}

// active a if selected page
const pages = document.querySelectorAll('.pagination a')
for (let page of pages) {
    if (String(location.search).includes(`${page.getAttribute('href')}`)) {
        page.classList.add('active')
    }
}

// active a if selected limit 
const limits = document.querySelectorAll('.limits a')
for (let limit of limits) {
    if (String(location.search).includes(`${limit.getAttribute('href').substr(4,9)}`)) {
        limit.classList.add('active')
    }
}