(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{257:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils"}},[t._v("#")]),t._v(" Utils")]),t._v(" "),a("h2",{attrs:{id:"working-with-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-tokens"}},[t._v("#")]),t._v(" Working with tokens")]),t._v(" "),a("p",[t._v("Tokens are identified with")]),t._v(" "),a("ol",[a("li",[t._v('symbol (e.g. "ETH", "DAI")')]),t._v(" "),a("li",[t._v('address ("0x0000000000000000000000000000000000000000" for "ETH" or "0xFab46E002BbF0b4509813474841E0716E6730136" for ERC20).')])]),t._v(" "),a("p",[t._v("To simplify conversions "),a("code",[t._v("TokenSet")]),t._v(" class can be used, token set can be obtained from "),a("a",{attrs:{href:"#current-token-set"}},[t._v("ZK Sync provider")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"resolve-token-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-token-id"}},[t._v("#")]),t._v(" Resolve token ID")]),t._v(" "),a("p",[t._v("Get numerical token id using its identifier.")]),t._v(" "),a("blockquote",[a("p",[t._v("Signature")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveTokenId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tokenLike"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TokenLike"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"resolve-token-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-token-address"}},[t._v("#")]),t._v(" Resolve token Address")]),t._v(" "),a("p",[t._v("Get token address using its identifier.")]),t._v(" "),a("blockquote",[a("p",[t._v("Signature")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveTokenAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tokenLike"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TokenLike"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TokenAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"resolve-token-symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-token-symbol"}},[t._v("#")]),t._v(" Resolve token Symbol")]),t._v(" "),a("p",[t._v("Get token symbol using its identifier.")]),t._v(" "),a("blockquote",[a("p",[t._v("Signature")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveTokenSymbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tokenLike"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TokenLike"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TokenSymbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"amount-packing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amount-packing"}},[t._v("#")]),t._v(" Amount packing")]),t._v(" "),a("h3",{attrs:{id:"check-if-amount-is-packable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-if-amount-is-packable"}},[t._v("#")]),t._v(" Check if amount is packable")]),t._v(" "),a("p",[t._v("Transfers amount should be packable to 5-byte long floating-point representation.\nThis function is used to check if this amount can be used as a transfer amount.")]),t._v(" "),a("blockquote",[a("p",[t._v("Signature")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTransactionAmountPackable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("amount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigNumberish")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"closest-packable-amount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#closest-packable-amount"}},[t._v("#")]),t._v(" Closest packable amount")]),t._v(" "),a("p",[t._v("Transfers amount should be packable to 5-byte long floating-point representation.\nThis function returns the closest packable amount by setting the least significant digits to zero.")]),t._v(" "),a("blockquote",[a("p",[t._v("Signature")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closestPackableTransactionAmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("amount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ethers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigNumberish")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ethers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"check-if-fee-is-packable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-if-fee-is-packable"}},[t._v("#")]),t._v(" Check if fee is packable")]),t._v(" "),a("p",[t._v("All fees paid in transfers and withdraws should be packable to 2-byte long floating-point representation.\nThis function is used to check if this amount can be used as a fee.")]),t._v(" "),a("blockquote",[a("p",[t._v("Signature")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTransactionFeePackable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("amount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigNumberish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"closest-packable-fee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#closest-packable-fee"}},[t._v("#")]),t._v(" Closest packable fee")]),t._v(" "),a("p",[t._v("All fees paid in transfers and withdraws should be packable to 2-byte long floating-point representation.\nThis function returns the closest packable amount by setting the least significant digits to zero.")]),t._v(" "),a("blockquote",[a("p",[t._v("Signature")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closestPackableTransactionFee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fee"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ethers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigNumberish")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ethers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"awaiting-for-operation-completion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#awaiting-for-operation-completion"}},[t._v("#")]),t._v(" Awaiting for operation completion")]),t._v(" "),a("p",[t._v("It is often useful to be able to wait until the transaction is committed or verified.\nIt is possible to do that using objects returned from methods that submit transactions.")]),t._v(" "),a("p",[t._v("It is possible to wait until the transactions like Transfer is either:")]),t._v(" "),a("ol",[a("li",[t._v("Committed (with "),a("code",[t._v("awaitReceipt")]),t._v(") when the state is updated in the ZK Sync network")]),t._v(" "),a("li",[t._v("Verified (with "),a("code",[t._v("awaitVerifyReceipt")]),t._v(") when the state is finalized on the Ethereum")])]),t._v(" "),a("p",[t._v("It is possible to wait until the operations like Deposit is either:")]),t._v(" "),a("ol",[a("li",[t._v("Mined on the Ethereum network (with "),a("code",[t._v("awaitEthereumTxCommit")]),t._v(")")]),t._v(" "),a("li",[t._v("Committed (with "),a("code",[t._v("awaitReceipt")]),t._v(") when the state is updated in the ZK Sync network")]),t._v(" "),a("li",[t._v("Verified (with "),a("code",[t._v("awaitVerifyReceipt")]),t._v(") when the state is finalized on the Ethereum")])]),t._v(" "),a("p",[t._v("Commit comes first, but there is no need to wait for commit if you are interested in the verify since await for verifying\nimplies await for commit.")]),t._v(" "),a("blockquote",[a("p",[t._v("Awaiting for transaction.")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" zksync "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zksync"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wallet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create ZK Sync Wallet")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// see transfer example for details")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transfer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("syncTransfer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this function will return when deposit is committed to the ZK Sync chain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" receiptAfterCommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" transfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awaitReceipt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this function will return when deposit is verified with ZK proof.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" receiptAfterVerify "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" transfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awaitVerifyReceipt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Awaiting for priority operation")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" zksync "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zksync"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// see deposit example for details")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deposit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zksync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("depositFromETH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this function will return when deposit request is accepted to the Ethereum.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txMinedCommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" deposit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awaitEthereumTxCommit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this function will return when deposit is committed to the ZK Sync chain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" receiptAfterCommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" deposit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awaitReceipt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this function will return when deposit is verified with ZK proof.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" receiptAfterVerify "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" deposit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awaitVerifyReceipt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);