function sortArray(array, sortingFn) {
    const arrayCopy = [...array]
    arrayCopy.sort(sortingFn)
    return arrayCopy
}

export default sortArray