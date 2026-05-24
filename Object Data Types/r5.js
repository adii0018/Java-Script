// // /pattern/ → basic regex.

// Flags:

// i → case‑insensitive

// g → global (multiple matches)

// m → multiline

// Useful for validation, searching, replacing.




{

    let a = /adi/i;
    console.log(a.test("Adii"))
    console.log(a.test("adii"))
}