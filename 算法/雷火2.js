/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param preStr string字符串 先序遍历序列
 * @param midStr string字符串 中序遍历序列
 * @return string字符串
 */
 function getPostOrderOfTree( preStr ,  midStr ) {
    // write code here 
    let po_str = '';
    function buildTree(preStr, midStr, preL, preR, midL, midR) {
        let begin=0;
        let l_tree = 0, r_tree=0;
        if(preL <= preR && midL <= midR) {
            for(begin=midL; begin<=midR; begin++) {
                //找到中间节点
                if(preStr[preL] == midStr[begin]) break;
            }
            l_tree = begin-midL;
            r_tree = midR - begin;
            if(l_tree > 0) buildTree(preStr, midStr, preL+1, preL+l_tree, midL, begin-1);    //递归构建左子树
            if(r_tree > 0) buildTree(preStr, midStr, preL+l_tree+1, preR, begin+1, midR);
            po_str += preStr[preL];
        }
    }
    buildTree(preStr, midStr, 0, preStr.length-1, 0, midStr.length-1)
    return po_str;
    
}
module.exports = {
    getPostOrderOfTree : getPostOrderOfTree
};