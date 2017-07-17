import typeExpression=require("./typeExpressionParser")
import typeExpressionDefs = require("./typeExpressionUtil")

export type BaseNode = typeExpressionDefs.BaseNode;
export type Union = typeExpressionDefs.Union;
export type Literal = typeExpressionDefs.Literal;
export type Parens = typeExpressionDefs.Parens;

/**
 * visit expressions
 * @param node
 * @param action
 */
export function visit(node:BaseNode,action:(n:BaseNode)=>void){
    action(node);
    if(node.type=="union"){
        var union = <Union>node;
        visit(union.first,action);
        visit(union.rest,action);
    }
    else if(node.type=="parens"){
        var parens = <Parens>node;
        visit(parens.expr,action);
    }
}
export function serializeToString(node:BaseNode):string{
    var arr = 0;
    var str:string;
    if(node.type=="name"){
        var literal = <Literal>node;
        str = literal.value;
        arr = literal.arr;
    }
    else if(node.type=="union"){
        var union = <Union>node;
        str = serializeToString(union.first) + " | " + serializeToString(union.rest);
    }
    else if(node.type=="parens"){
        var parens = <Parens>node;
        str = "("+serializeToString(parens.expr)+")";
        arr = parens.arr;
    }
    while(--arr>=0){
        str += "[]";
    }
    return str;
}

export function parse(str:string):BaseNode{
    return typeExpression.parse(str);
}