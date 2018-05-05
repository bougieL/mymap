/**
 * 获取两个矩形交叉的矩形交叉矩形
 * 
 * @param {any} rectA [startX, startY, endX, endY]
 * @param {any} rectB [startX, startY, endX, endY]
 * @returns 
 */
function getCrossRect(rectA, rectB) {
    if (rectB[0] > rectA[2] || rectB[2] < rectA[0] || rectB[1] > rectA[3] || rectB[3] < rectA[1]) return [0, 0, 0, 0]
    let startX = rectA[0] > rectB[0] ? rectA[0] : rectB[0],
        startY = rectA[1] > rectB[1] ? rectA[1] : rectB[1],
        endX = rectA[2] < rectB[2] ? rectA[2] : rectB[2],
        endY = rectA[3] < rectB[3] ? rectA[3] : rectB[3]
    return [startX, startY, endX, endY]
}

/**
 * 矩形面积
 * 
 * @param {any} rect [startX, startY, endX, endY]
 * @returns 
 */
function square(rect) {
    return (rect[2] - rect[0]) * (rect[3] - rect[1])
}

/**
 * 获取矩形中心
 * 
 * @param {any} rect [startX, startY, endX, endY]
 * @returns 
 */
function getCenter(rect) {
    return [(rect[0] + rect[2]) / 2, (rect[1] + rect[3]) / 2]
}

/**
 * 获得两个点距离的平方
 * 
 * @param {any} pA 
 * @param {any} pB 
 * @returns 
 */
function lineLength(pA, pB) {
    return (pA[0] - pB[0]) ** 2 + (pA[1] - pB[1]) ** 2
}

export default {
    getCrossRect,
    square,
    getCenter,
    lineLength
}