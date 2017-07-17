/**
 * parser
 * @type {{SyntaxError: ((message:any, expected:any, found:any, location:any)=>any); parse: ((input:any)=>any)}}
 */
var parser = (function() {
    "use strict";

    /*
     * Generated by PEG.js 0.9.0.
     *
     * http://pegjs.org/
     */

    function peg$subclass(child:any, parent:any) {
        function ctor() { this.constructor = child; }
        ctor.prototype = parent.prototype;
        child.prototype = new (<any>ctor)();
    }

    function peg$SyntaxError(message:any, expected:any, found:any, location:any):any {
        this.message  = message;
        this.expected = expected;
        this.found    = found;
        this.location = location;
        this.name     = "SyntaxError";

        if (typeof (<any>Error).captureStackTrace === "function") {
            (<any>Error).captureStackTrace(this, peg$SyntaxError);
        }
    }

    peg$subclass(peg$SyntaxError, Error);

    function peg$parse(input:any) {
        var options = arguments.length > 1 ? arguments[1] : {},
            parser  = this,

            peg$FAILED = {},

            peg$startRuleFunctions:any = { Term: peg$parseTerm },
            peg$startRuleFunction  = peg$parseTerm,

            peg$c0 = "|",
            peg$c1 = { type: "literal", value: "|", description: "\"|\"" },
            peg$c2 = function(first:any, rest:any) {
                return rest?{"type": "union","first":first,"rest":rest[3]}:first
            },
            peg$c3 = "(",
            peg$c4 = { type: "literal", value: "(", description: "\"(\"" },
            peg$c5 = ")",
            peg$c6 = { type: "literal", value: ")", description: "\")\"" },
            peg$c7 = "[]",
            peg$c8 = { type: "literal", value: "[]", description: "\"[]\"" },
            peg$c9 = function(expr:any, arr:any) { return {"type":"parens","expr":expr,"arr":arr.length}; },
            peg$c10 = "<",
            peg$c11 = { type: "literal", value: "<", description: "\"<\"" },
            peg$c12 = ">",
            peg$c13 = { type: "literal", value: ">", description: "\">\"" },
            peg$c14 = function(first:any, other:any) {return [first].concat(other)},
            peg$c15 = ",",
            peg$c16 = { type: "literal", value: ",", description: "\",\"" },
            peg$c17 = function(r:any) {return r;},
            peg$c18 = { type: "other", description: "name" },
            peg$c19 = function(r:any, c:any) { return { "type":"name", "value":r.join(""),"arr":(c.length)}; },
            peg$c20 = { type: "other", description: "whitespace" },
            peg$c21 = /^[ \t\n\r]/,
            peg$c22 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
            peg$c23 = /^[A-Z]/,
            peg$c24 = { type: "class", value: "[A-Z]", description: "[A-Z]" },
            peg$c25 = "_",
            peg$c26 = { type: "literal", value: "_", description: "\"_\"" },
            peg$c27 = "-",
            peg$c28 = { type: "literal", value: "-", description: "\"-\"" },
            peg$c29 = ".",
            peg$c30 = { type: "literal", value: ".", description: "\".\"" },
            peg$c31 = /^[a-z:#\/]/,
            peg$c32 = { type: "class", value: "[a-z]", description: "[a-z]" },
            peg$c33 = /^[0-9]/,
            peg$c34 = { type: "class", value: "[0-9]", description: "[0-9]" },
            peg$c35 = "?",
            peg$c36 = { type: "literal", value: "?", description: "\"?\"" },

            peg$currPos          = 0,
            peg$savedPos         = 0,
            peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
            peg$maxFailPos       = 0,
            peg$maxFailExpected:any[]  = [],
            peg$silentFails      = 0,

            peg$result:any;

        if ("startRule" in options) {
            if (!(options.startRule in peg$startRuleFunctions)) {
                throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
            }

            peg$startRuleFunction = (<any>peg$startRuleFunctions[<string>options.startRule]);
        }

        function text() {
            return input.substring(peg$savedPos, peg$currPos);
        }

        function location() {
            return peg$computeLocation(peg$savedPos, peg$currPos);
        }

        function expected(description:any) {
            throw peg$buildException(
                null,
                [{ type: "other", description: description }],
                input.substring(peg$savedPos, peg$currPos),
                peg$computeLocation(peg$savedPos, peg$currPos)
            );
        }

        function error(message:any) {
            throw peg$buildException(
                message,
                null,
                input.substring(peg$savedPos, peg$currPos),
                peg$computeLocation(peg$savedPos, peg$currPos)
            );
        }

        function peg$computePosDetails(pos:any) {
            var details = peg$posDetailsCache[pos],
                p:any, ch:any;

            if (details) {
                return details;
            } else {
                p = pos - 1;
                while (!peg$posDetailsCache[p]) {
                    p--;
                }

                details = peg$posDetailsCache[p];
                details = {
                    line:   details.line,
                    column: details.column,
                    seenCR: details.seenCR
                };

                while (p < pos) {
                    ch = input.charAt(p);
                    if (ch === "\n") {
                        if (!details.seenCR) { details.line++; }
                        details.column = 1;
                        details.seenCR = false;
                    } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
                        details.line++;
                        details.column = 1;
                        details.seenCR = true;
                    } else {
                        details.column++;
                        details.seenCR = false;
                    }

                    p++;
                }

                peg$posDetailsCache[pos] = details;
                return details;
            }
        }

        function peg$computeLocation(startPos:any, endPos:any) {
            var startPosDetails = peg$computePosDetails(startPos),
                endPosDetails   = peg$computePosDetails(endPos);

            return {
                start: {
                    offset: startPos,
                    line:   startPosDetails.line,
                    column: startPosDetails.column
                },
                end: {
                    offset: endPos,
                    line:   endPosDetails.line,
                    column: endPosDetails.column
                }
            };
        }

        function peg$fail(expected:any) {
            if (peg$currPos < peg$maxFailPos) { return; }

            if (peg$currPos > peg$maxFailPos) {
                peg$maxFailPos = peg$currPos;
                peg$maxFailExpected = [];
            }

            peg$maxFailExpected.push(expected);
        }

        function peg$buildException(message:any, expected:any, found:any, location:any) {
            function cleanupExpected(expected:any) {
                var i = 1;

                expected.sort(function(a:any, b:any) {
                    if (a.description < b.description) {
                        return -1;
                    } else if (a.description > b.description) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                while (i < expected.length) {
                    if (expected[i - 1] === expected[i]) {
                        expected.splice(i, 1);
                    } else {
                        i++;
                    }
                }
            }

            function buildMessage(expected:any, found:any) {
                function stringEscape(s:any) {
                    function hex(ch:any) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

                    return s
                        .replace(/\\/g,   '\\\\')
                        .replace(/"/g,    '\\"')
                        .replace(/\x08/g, '\\b')
                        .replace(/\t/g,   '\\t')
                        .replace(/\n/g,   '\\n')
                        .replace(/\f/g,   '\\f')
                        .replace(/\r/g,   '\\r')
                        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch:any) { return '\\x0' + hex(ch); })
                        .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch:any) { return '\\x'  + hex(ch); })
                        .replace(/[\u0100-\u0FFF]/g,         function(ch:any) { return '\\u0' + hex(ch); })
                        .replace(/[\u1000-\uFFFF]/g,         function(ch:any) { return '\\u'  + hex(ch); });
                }

                var expectedDescs:any = new Array(expected.length),
                    expectedDesc:any, foundDesc:any, i:any;

                for (i = 0; i < expected.length; i++) {
                    expectedDescs[i] = expected[i].description;
                }

                expectedDesc = expected.length > 1
                    ? expectedDescs.slice(0, -1).join(", ")
                + " or "
                + expectedDescs[expected.length - 1]
                    : expectedDescs[0];

                foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

                return "Expected " + expectedDesc + " but " + foundDesc + " found.";
            }

            if (expected !== null) {
                cleanupExpected(expected);
            }

            return <any>new (<any>peg$SyntaxError)(
                message !== null ? message : buildMessage(expected, found),
                expected,
                found,
                location
            );
        }

        function peg$parseTerm() {
            var s0:any, s1:any, s2:any, s3:any, s4:any, s5:any, s6:any, s7:any;

            s0 = peg$currPos;
            s1 = peg$parse_();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseFactor();
                if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 124) {
                            s5 = peg$c0;
                            peg$currPos++;
                        } else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c1); }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parse_();
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseTerm();
                                if (s7 !== peg$FAILED) {
                                    s4 = [s4, s5, s6, s7];
                                    s3 = s4;
                                } else {
                                    peg$currPos = s3;
                                    s3 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s3;
                                s3 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                    if (s3 === peg$FAILED) {
                        s3 = null;
                    }
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c2(s2, s3);
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }

            return s0;
        }

        function peg$parseFactor() {
            var s0:any, s1:any, s2:any, s3:any, s4:any, s5:any, s6:any, s7:any, s8:any, s9:any;

            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 40) {
                s1 = peg$c3;
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parse_();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseTerm();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parse_();
                        if (s4 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 41) {
                                s5 = peg$c5;
                                peg$currPos++;
                            } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c6); }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = [];
                                s7 = peg$currPos;
                                s8 = peg$parse_();
                                if (s8 !== peg$FAILED) {
                                    if (input.substr(peg$currPos, 2) === peg$c7) {
                                        s9 = peg$c7;
                                        peg$currPos += 2;
                                    } else {
                                        s9 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c8); }
                                    }
                                    if (s9 !== peg$FAILED) {
                                        s8 = [s8, s9];
                                        s7 = s8;
                                    } else {
                                        peg$currPos = s7;
                                        s7 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s7;
                                    s7 = peg$FAILED;
                                }
                                while (s7 !== peg$FAILED) {
                                    s6.push(s7);
                                    s7 = peg$currPos;
                                    s8 = peg$parse_();
                                    if (s8 !== peg$FAILED) {
                                        if (input.substr(peg$currPos, 2) === peg$c7) {
                                            s9 = peg$c7;
                                            peg$currPos += 2;
                                        } else {
                                            s9 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c8); }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s8 = [s8, s9];
                                            s7 = s8;
                                        } else {
                                            peg$currPos = s7;
                                            s7 = peg$FAILED;
                                        }
                                    } else {
                                        peg$currPos = s7;
                                        s7 = peg$FAILED;
                                    }
                                }
                                if (s6 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c9(s3, s6);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
                s0 = peg$parseLiteral();
            }

            return s0;
        }

        function peg$parseTypeParams() {
            var s0:any, s1:any, s2:any, s3:any, s4:any;

            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 60) {
                s1 = peg$c10;
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c11); }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseTerm();
                if (s2 !== peg$FAILED) {
                    s3 = [];
                    s4 = peg$parseExtraParam();
                    while (s4 !== peg$FAILED) {
                        s3.push(s4);
                        s4 = peg$parseExtraParam();
                    }
                    if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 62) {
                            s4 = peg$c12;
                            peg$currPos++;
                        } else {
                            s4 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c13); }
                        }
                        if (s4 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c14(s2, s3);
                            s0 = s1;
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }

            return s0;
        }

        function peg$parseExtraParam() {
            var s0:any, s1:any, s2:any;

            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
                s1 = peg$c15;
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseTerm();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c17(s2);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }

            return s0;
        }

        function peg$parseLiteral() {
            var s0:any, s1:any, s2:any, s3:any, s4:any, s5:any;

            peg$silentFails++;
            s0 = peg$currPos;
            s1 = [];
            s2 = peg$parsechar();
            if (s2 !== peg$FAILED) {
                while (s2 !== peg$FAILED) {
                    s1.push(s2);
                    s2 = peg$parsechar();
                }
            } else {
                s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c7) {
                        s5 = peg$c7;
                        peg$currPos += 2;
                    } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c8); }
                    }
                    if (s5 !== peg$FAILED) {
                        s4 = [s4, s5];
                        s3 = s4;
                    } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    s3 = peg$currPos;
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 2) === peg$c7) {
                            s5 = peg$c7;
                            peg$currPos += 2;
                        } else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c8); }
                        }
                        if (s5 !== peg$FAILED) {
                            s4 = [s4, s5];
                            s3 = s4;
                        } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                }
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c19(s1, s2);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            peg$silentFails--;
            if (s0 === peg$FAILED) {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c18); }
            }

            return s0;
        }

        function peg$parse_() {
            var s0:any, s1:any;

            peg$silentFails++;
            s0 = [];
            if (peg$c21.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c22); }
            }
            while (s1 !== peg$FAILED) {
                s0.push(s1);
                if (peg$c21.test(input.charAt(peg$currPos))) {
                    s1 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c22); }
                }
            }
            peg$silentFails--;
            if (s0 === peg$FAILED) {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c20); }
            }

            return s0;
        }

        function peg$parsechar() {
            var s0:any;

            if (peg$c23.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c24); }
            }
            if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 95) {
                    s0 = peg$c25;
                    peg$currPos++;
                } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c26); }
                }
                if (s0 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 45) {
                        s0 = peg$c27;
                        peg$currPos++;
                    } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c28); }
                    }
                    if (s0 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 46) {
                            s0 = peg$c29;
                            peg$currPos++;
                        } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c30); }
                        }
                        if (s0 === peg$FAILED) {
                            if (peg$c31.test(input.charAt(peg$currPos))) {
                                s0 = input.charAt(peg$currPos);
                                peg$currPos++;
                            } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c32); }
                            }
                            if (s0 === peg$FAILED) {
                                if (peg$c33.test(input.charAt(peg$currPos))) {
                                    s0 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                } else {
                                    s0 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c34); }
                                }
                                if (s0 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 63) {
                                        s0 = peg$c35;
                                        peg$currPos++;
                                    } else {
                                        s0 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c36); }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return s0;
        }

        peg$result = peg$startRuleFunction();

        if (peg$result !== peg$FAILED && peg$currPos === input.length) {
            return peg$result;
        } else {
            if (peg$result !== peg$FAILED && peg$currPos < input.length) {
                peg$fail({ type: "end", description: "end of input" });
            }

            throw peg$buildException(
                null,
                peg$maxFailExpected,
                peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
                peg$maxFailPos < input.length
                    ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
                    : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
            );
        }
    }

    return {
        SyntaxError: peg$SyntaxError,
        parse:       peg$parse
    };
})();
export=parser;