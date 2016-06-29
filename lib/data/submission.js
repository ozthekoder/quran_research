var f = void 0,
    h, aa, i, j, k, l, m, n, ba, ca, da, ea, p, r, s, fa, ga, ha, ia, ja, la, ma, v, na, oa, w, y, pa, qa, z, ra, sa, ta, ua, va, wa, xa, ya, A, za, Aa, Ba, Ca, C, D, Da, Ea, F, Fa, G, Ga, K, Ha, L, Ia, Ka, La, Ma, M, Na, Oa, Pa, Qa, Ra, O, Sa, Ta, P, Q, Ua, Va, Wa;
if (!String.prototype.trim) String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
};

function Xa() {
    if (Ta == Ta.top) {
        K = document;
        var a = '<div id="ACS"><div id="ADH"></div><div id="ADI"></div>';
        switch (R()) {
            case 0:
                a += '<div id="nav">' + Ya() + '</div><div id="AAI"></div>';
                break;
            case 1:
            case 2:
                a += '<div id="AAI"></div>' + ('<div id="nav">' + Ya() + "</div>")
        }
        K.getElementsByTagName("body")[0].innerHTML = a + "</div>";
        Ha = K.getElementById("nav");
        L = K.getElementById("AAI");
        Ia = K.getElementById("ADH");
        Ka = K.getElementById("ADI")
    }
}

function Za(a) {
    switch (a) {
        case 1:
            $a("000");
            break;
        case 2:
            $a("777");
            break;
        case 3:
            $a("fff")
    }
}

function $a(a) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + a
}

function S() {
    return parseInt(D.ABQ)
}

function T(a) {
    return parseInt(D.ABJ[a])
}

function ab() {
    delete localStorage.QI2_settings
}

function bb() {
    return parseInt(D.AEN) == 1 ? !0 : !1
}

function cb(a) {
    for (var b = 0; b != Ea; b++) T(b) != -1 && db(T(b), a)
}

function db(a, b) {
    l[a][6346] != f ? eb() && b != f && b() : fb(Aa + C[a][6], function() {
        var c = this.responseText;
        if (a == 0) {
            for (var e = 0; e != 6347; e++) l[0][e] = [];
            for (var c = c.split(Ca), g = c.length, d, o, q, e = 0; e != g; e++) d = c[e].split(Ba), o = parseInt(d[0]), q = parseInt(d[1]), o == 9 && (q == 128 || q == 129) || (d.length == 3 && (l[0][U(o, q)][0] = d[2]), o != 1 && o != 9 && q == 1 && (l[0][U(o, 0)][0] = d[2].split(" ").slice(0, 4).join(" ").trim(), l[0][U(o, q)][0] = d[2].split(" ").slice(4).join(" ").trim()));
            l[0][U(3, 136)][0] = l[0][U(3, 136)][0].replace(/\u062c\u064e\u0632\u0627\u0624\u064f\u0647\u064f\u0645/g, "\u062c\u064e\u0632\u0670\u0624\u064f\u0647\u064f\u0645");
            l[0][U(7, 38)][0] = l[0][U(7, 38)][0].replace(/\u0627\u062f\u0651\u0627\u0631\u064e\u0643\u0648\u0627/g, "\u0627\u062f\u0651\u0670\u0631\u064e\u0643\u0648\u0627");
            l[0][U(7, 46)][0] = l[0][U(7, 46)][0].replace(/\u0627\u0644\u0623\u064e\u0639\u0631\u0627\u0641\u0650/g, "\u0627\u0644\u0623\u064e\u0639\u0631\u0670\u0641\u0650");
            l[0][U(7, 48)][0] = l[0][U(7, 48)][0].replace(/\u0627\u0644\u0623\u064e\u0639\u0631\u0627\u0641\u0650/g, "\u0627\u0644\u0623\u064e\u0639\u0631\u0670\u0641\u0650");
            l[0][U(7, 66)][0] = l[0][U(7, 66)][0].replace(/\u0633\u064e\u0641\u0627\u0647\u064e\u0629\u064d/g, "\u0633\u064e\u0641\u0670\u0647\u064e\u0629\u064d");
            l[0][U(7, 67)][0] = l[0][U(7, 67)][0].replace(/\u0633\u064e\u0641\u0627\u0647\u064e\u0629\u064c/g, "\u0633\u064e\u0641\u0670\u0647\u064e\u0629\u064c");
            l[0][U(7, 69)][0] = l[0][U(7, 69)][0].replace(/\u0628\u064e\u0635\u06dc\u0637\u064e\u0629\u064b/g, "\u0628\u064e\u0633\u0652\u0637\u064e\u0629\u064b");
            l[0][U(7, 133)][0] = l[0][U(7, 133)][0].replace(/\u0648\u064e\u0627\u0644\u0636\u0651\u064e\u0641\u0627\u062f\u0650\u0639\u064e/g, "\u0648\u064e\u0627\u0644\u0636\u0651\u064e\u0641\u0670\u062f\u0650\u0639\u064e");
            l[0][U(7, 145)][0] = l[0][U(7, 145)][0].replace(/\u0627\u0644\u0623\u064e\u0644\u0648\u0627\u062d\u0650/g, "\u0627\u0644\u0623\u064e\u0644\u0648\u0670\u062d\u0650");
            l[0][U(7, 150)][0] = l[0][U(7, 150)][0].replace(/\u0627\u0644\u0623\u064e\u0644\u0648\u0627\u062d\u064e/g, "\u0627\u0644\u0623\u064e\u0644\u0648\u0670\u062d\u064e");
            l[0][U(7, 150)][0] = l[0][U(7, 150)][0].replace(/\u0627\u0628\u0646\u064e \u0623\u064f\u0645\u0651\u064e/g, "\u0627\u0628\u0646\u064e\u0624\u064f\u0645\u0651\u064e");
            l[0][U(7, 154)][0] = l[0][U(7, 154)][0].replace(/\u0627\u0644\u0623\u064e\u0644\u0648\u0627\u062d\u064e/g, "\u0627\u0644\u0623\u064e\u0644\u0648\u0670\u062d\u064e");
            l[0][U(7, 163)][0] = l[0][U(7, 163)][0].replace(/\u062d\u064a\u062a\u0627\u0646\u064f\u0647\u064f\u0645/g, "\u062d\u064a\u062a\u0670\u0646\u064f\u0647\u064f\u0645");
            l[0][U(10, 15)][0] = l[0][U(10, 15)][0].replace(/\u0621\u0627\u064a\u0627\u062a\u064f\u0646\u0627/g, "\u0621\u0627\u064a\u0670\u062a\u064f\u0646\u0627");
            l[0][U(10, 21)][0] = l[0][U(10, 21)][0].replace(/\u0621\u0627\u064a\u0627\u062a\u0650\u0646\u0627/g, "\u0621\u0627\u064a\u0670\u062a\u0650\u0646\u0627");
            l[0][U(13, 4)][0] = l[0][U(13, 4)][0].replace(/\u0635\u0650\u0646\u0648\u0627\u0646\u064c/g, "\u0635\u0650\u0646\u0648\u0670\u0646\u064c");
            l[0][U(13, 4)][0] = l[0][U(13, 4)][0].replace(/\u0635\u0650\u0646\u0648\u0627\u0646\u064d/g, "\u0635\u0650\u0646\u0648\u0670\u0646\u064d");
            l[0][U(13, 5)][0] = l[0][U(13, 5)][0].replace(/\u0623\u064e\u0639\u0646\u0627\u0642\u0650\u0647\u0650\u0645/g, "\u0623\u064e\u0639\u0646\u0670\u0642\u0650\u0647\u0650\u0645");
            l[0][U(13, 14)][0] = l[0][U(13, 14)][0].replace(/\u062f\u064f\u0639\u0627\u0621\u064f/g, "\u062f\u064f\u0639\u0670\u0624\u064f\u0627\u0652");
            l[0][U(13, 17)][0] = l[0][U(13, 17)][0].replace(/\u0627\u0644\u0623\u064e\u0645\u062b\u0627\u0644\u064e/g, "\u0627\u0644\u0623\u064e\u0645\u062b\u0670\u0644\u064e");
            c = String.fromCharCode(1569);
            g = String.fromCharCode(1609);
            d = String.fromCharCode(1600) + String.fromCharCode(1767);
            o = String.fromCharCode(8200) + String.fromCharCode(1766);
            for (e = 1; e != 6347; e++) l[0][e][0] = l[0][e][0].replace(/[\u064a]([\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*[\u0020\u2008\u0621])/g, g + "$1"), l[0][e][0] = l[0][e][0].replace(/[\u0640][\u0654]/g, c), l[0][e][0] = l[0][e][0].replace(/([\u0626\u0628-\u062e\u0633-\u063a\u0641-\u0647\u0649\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)[\u06e6]([\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*[\u0622-\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)/g, "$1" + d + "$2"), l[0][e][0] = l[0][e][0].replace(/([^\u0626\u0628-\u062e\u0633-\u063a\u0641-\u0647\u0649\u064a][^\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)[\u06e6]([^\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*[^\u0622-\u064a][^\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)/g, "$1" + o + "$2");
            l[0][U(68, 1)][0] = l[0][U(68, 1)][0].replace(/\u0646 /i, "\u0646\u064f\u0648\u0646\u0652 ");
            l[0][U(17, 7)][0] = l[0][U(17, 7)][0].replace(/\u0644\u0650\u064a\u064e\u0633\u06e5\u0621\u0648\u0627/i, "\u0644\u0650\u064a\u064e\u0633\u0621\u0648\u0627")
        } else {
            e = c.split(Ca);
            c = e.length;
            for (d = 0; d != c; d++) switch (g = e[d].split(Ba), g[0]) {
                case "v":
                    l[a][parseInt(g[1])] = g.slice(2);
                    l[a][parseInt(g[1])][2] = g.slice(4).join(Ba);
                    break;
                case "s":
                    k[a][parseInt(g[1])] = g[2];
                    break;
                case "a":
                    ba[a][parseInt(g[1])] = g.slice(2);
                    break;
                case "i":
                    ca[a] = g.slice(1)
            }
        }
        if (eb())
            if (b != f) b();
            else if (Za(2), gb(), k[0][1] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062a\u062d\u0629", k[0][2] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0628\u0642\u0631\u0629", k[0][3] = "\u0633\u0648\u0631\u0629 \u0622\u0644 \u0639\u0645\u0631\u0627\u0646", k[0][4] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0633\u0627\u0621", k[0][5] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0627\u0626\u062f\u0629", k[0][6] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0623\u0646\u0639\u0627\u0645", k[0][7] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0623\u0639\u0631\u0627\u0641", k[0][8] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0623\u0646\u0641\u0627\u0644", k[0][9] = "\u0633\u0648\u0631\u0629 \u0628\u0631\u0627\u0621\u0629", k[0][10] = "\u0633\u0648\u0631\u0629 \u064a\u0648\u0646\u0633", k[0][11] = "\u0633\u0648\u0631\u0629 \u0647\u0648\u062f", k[0][12] = "\u0633\u0648\u0631\u0629 \u064a\u0648\u0633\u0641", k[0][13] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0631\u0639\u062f", k[0][14] = "\u0633\u0648\u0631\u0629 \u0625\u0628\u0631\u0627\u0647\u064a\u0645", k[0][15] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062d\u062c\u0631", k[0][16] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u062d\u0644", k[0][17] = "\u0633\u0648\u0631\u0629 \u0628\u0646\u0649 \u0625\u0633\u0631\u0627\u0626\u064a\u0644", k[0][18] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0643\u0647\u0641", k[0][19] = "\u0633\u0648\u0631\u0629 \u0645\u0631\u064a\u0645", k[0][20] = "\u0633\u0648\u0631\u0629 \u0637\u0647", k[0][21] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0623\u0646\u0628\u064a\u0627\u0621", k[0][22] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062d\u062c", k[0][23] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0648\u0645\u0646\u0648\u0646", k[0][24] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0648\u0631", k[0][25] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0631\u0642\u0627\u0646", k[0][26] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0634\u0639\u0631\u0627\u0621", k[0][27] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0645\u0644", k[0][28] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0642\u0635\u0635", k[0][29] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0639\u0646\u0643\u0628\u0648\u062a", k[0][30] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0631\u0648\u0645", k[0][31] = "\u0633\u0648\u0631\u0629 \u0644\u0642\u0645\u0627\u0646", k[0][32] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0633\u062c\u062f\u0629", k[0][33] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0623\u062d\u0632\u0627\u0628", k[0][34] = "\u0633\u0648\u0631\u0629 \u0633\u0628\u0623", k[0][35] = "\u0633\u0648\u0631\u0629 \u0641\u0627\u0637\u0631", k[0][36] = "\u0633\u0648\u0631\u0629 \u064a\u0633", k[0][37] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0635\u0627\u0641\u0627\u062a", k[0][38] = "\u0633\u0648\u0631\u0629 \u0635", k[0][39] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0632\u0645\u0631", k[0][40] = "\u0633\u0648\u0631\u0629 \u063a\u0627\u0641\u0631", k[0][41] = "\u0633\u0648\u0631\u0629 \u0641\u0635\u0644\u062a", k[0][42] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0634\u0648\u0631\u0649", k[0][43] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0632\u062e\u0631\u0641", k[0][44] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062f\u062e\u0627\u0646", k[0][45] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062c\u0627\u062b\u064a\u0629", k[0][46] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0623\u062d\u0642\u0627\u0642", k[0][47] = "\u0633\u0648\u0631\u0629 \u0645\u062d\u0645\u062f", k[0][48] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u062a\u062d", k[0][49] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062d\u062c\u0631\u0627\u062a", k[0][50] = "\u0633\u0648\u0631\u0629 \u0642", k[0][51] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0630\u0627\u0631\u064a\u0627\u062a", k[0][52] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0637\u0648\u0631", k[0][53] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u062c\u0645", k[0][54] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0642\u0645\u0631", k[0][55] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0631\u062d\u0645\u0646", k[0][56] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0648\u0627\u0642\u0639\u0629", k[0][57] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062d\u062f\u064a\u062f", k[0][58] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u062c\u0627\u062f\u0644\u0629", k[0][59] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062d\u0634\u0631", k[0][60] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0645\u062a\u062d\u0646\u0629", k[0][61] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0635\u0641", k[0][62] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062c\u0645\u0639\u0629", k[0][63] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0646\u0627\u0641\u0642\u0648\u0646", k[0][64] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062a\u063a\u0627\u0628\u0646", k[0][65] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0637\u0644\u0627\u0642", k[0][66] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062a\u062d\u0631\u064a\u0645", k[0][67] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0643", k[0][68] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0642\u0644\u0645", k[0][69] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062d\u0627\u0642\u0629", k[0][70] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0639\u0627\u0631\u062c", k[0][71] = "\u0633\u0648\u0631\u0629 \u0646\u0648\u062d", k[0][72] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062c\u0646", k[0][73] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0632\u0645\u0644", k[0][74] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u062f\u062b\u0631", k[0][75] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0642\u064a\u0627\u0645\u0629", k[0][76] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646", k[0][77] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0631\u0633\u0644\u0627\u0629", k[0][78] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0628\u0623", k[0][79] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0627\u0632\u0639\u0627\u062a", k[0][80] = "\u0633\u0648\u0631\u0629 \u0639\u0628\u0633", k[0][81] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062a\u0643\u0648\u064a\u0631", k[0][82] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0625\u0646\u0641\u0637\u0627\u0631", k[0][83] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0637\u0641\u0641\u064a\u0646", k[0][84] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0625\u0646\u0634\u0642\u0627\u0642", k[0][85] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0628\u0631\u0648\u062c", k[0][86] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0637\u0627\u0631\u0642", k[0][87] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0623\u0639\u0644\u0649", k[0][88] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u063a\u0627\u0634\u064a\u0629", k[0][89] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u062c\u0631", k[0][90] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0628\u0644\u062f", k[0][91] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0634\u0645\u0633", k[0][92] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0644\u064a\u0644", k[0][93] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0636\u062d\u0649", k[0][94] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0634\u0631\u062d", k[0][95] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062a\u064a\u0646", k[0][96] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0639\u0644\u0642", k[0][97] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0642\u062f\u0631", k[0][98] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0628\u064a\u0646\u0629", k[0][99] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0632\u0644\u0632\u0644\u0629", k[0][100] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0639\u0627\u062f\u064a\u0627\u062a", k[0][101] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0642\u0627\u0631\u0639\u0629", k[0][102] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u062a\u0643\u0627\u062b\u0631", k[0][103] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0639\u0635\u0631", k[0][104] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0647\u0645\u0632\u0629", k[0][105] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u064a\u0644", k[0][106] = "\u0633\u0648\u0631\u0629 \u0642\u0631\u064a\u0634", k[0][107] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0627\u0639\u0648\u0646", k[0][108] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0643\u0648\u062b\u0631", k[0][109] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0643\u0627\u0641\u0631\u0648\u0646", k[0][110] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0635\u0631", k[0][111] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0633\u062f", k[0][112] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0625\u062e\u0644\u0627\u0635", k[0][113] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0644\u0642", k[0][114] = "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0627\u0633", v[m][0] = "http://submission.org,Submission.org", v[m][1] = "mailto:info@submission.org,info@submission.org", !hb()) Xa(), L.style.fontSize = parseInt(ib()) + "%", jb(), kb(), window.setInterval(lb, 250), mb(), nb(Ha, 0), ea = Number(new Date), window.location.hash.search(/#/g) != -1 ? ob(window.unescape(window.location.hash.toString()).substr(1).replace(/_/g, " ")) : (pb("/about"), K.getElementById("AAU").value = ""), L.focus(), window.onhashchange = qb, Za(3)
    })
}

function eb() {
    for (var a = 0; a != D.ABJ.length; a++)
        if (T(a) > -1 && l[T(a)][6346] == f) return !1;
    return !0
}

function rb() {
    for (var a = 0; a != D.ABJ.length; a++)
        if (T(a) > 0) return T(a);
    return 0
}

function sb() {
    for (var a = 0; a != D.ABJ.length; a++)
        if (T(a) == 0) return !0;
    return !1
}

function tb() {
    return rb() != 0 ? !0 : !1
}

function ub(a) {
    return ' dir="' + C[a][4] + '" lang="' + C[a][1] + '" '
}

function fb(a, b) {
    var c = new XMLHttpRequest;
    c.open("GET", a, !0);
    c.onreadystatechange = function() {
        c.readyState == 4 && (c.status == 200 ? b.apply(c) : b.apply({
            responseText: ""
        }))
    };
    c.send(null)
}

function vb() {
    fb(Aa + "QI2_20160513_data", function() {
        var a = this.responseText.split(Ca);
        m = parseInt(a[0]);
        C = Array(m);
        for (var b = 1; b <= m; b++) C[b - 1] = a[b].split(Ba);
        v = Array(m + 1);
        for (b = 0; b != m + 1; b++) v[b] = [];
        for (var c, b = m + 1; b != a.length; b++) c = a[b].split(Ba), c[0] == "u" && (v[c[1]][c[2]] = c[3]), c[0] == "c" && (v[m][2] = c[1]);
        localStorage.QI2_settings != f && (D = JSON.parse(localStorage.QI2_settings), D.ADN != Da && ab());
        D == f && (D = {});
        D.ADN == f && (D.ADN = 1);
        D.ABJ == f && (D.ABJ = Array(Ea));
        D.ABJ[0] == f && (D.ABJ[0] = window.navigator.language == f ? 1 : window.navigator.language.search(/fr/i) == 0 ? wb("fr") : 1);
        D.ABJ[3] == f && (D.ABJ[3] = 0);
        for (a = 0; a != Ea; a++) D.ABJ[a] == f && (D.ABJ[a] = -1);
        D.ABN == f && (D.ABN = 1);
        D.ABO == f && (D.ABO = 1);
        D.AEN == f && (D.AEN = 1);
        D.ABP == f && (D.ABP = navigator.userAgent.search(/ipad|iphone|ipod|android|webos/i) != -1 ? 2 : 0);
        D.ABL == f && (D.ABL = xb());
        D.ABK == f && (D.ABK = yb());
        D.ABQ == f && (D.ABQ = 25);
        k = Array(m);
        for (a = 0; a != m; a++) k[a] = Array(115);
        l = Array(m);
        for (a = 0; a != m; a++) l[a] = Array(6347);
        ba = Array(m);
        for (a = 0; a != m; a++) ba[a] = [];
        ca = Array(m);
        for (a = 0; a != m; a++) ca[a] = [];
        D.ABJ.length != Ea && alert("Error!");
        cb()
    })
}

function gb() {
    if (l[0][6346] == f) {
        for (var a = -1, b = 0; b != D.ABJ.length; b++)
            if (T(b) == 1 || T(b) == 2 || T(b) == 5) {
                a = T(b);
                break
            }
        if (a != -1) {
            var b = v[a][0],
                c = RegExp(b, "g"),
                e = b.slice(1);
            if (F == f || Fa == f) {
                F = Array(6347);
                Fa = Array(6347);
                F[1] = 1;
                Fa[1] = 1;
                for (b = 2; b != 6347; b++) F[b] = F[b - 1] + (l[a][b][0].length - l[a][b][0].replace(c, e).length), Fa[b] = F[b] > F[b - 1] ? Fa[b - 1] + V(b) : Fa[b - 1]
            }
        }
    } else {
        if (F == f || Fa == f) {
            F = Array(6347);
            Fa = Array(6347);
            F[1] = 1;
            Fa[1] = 1;
            for (a = 2; a != 6347; a++) V(a) == 0 ? (F[a] = F[a - 1], Fa[a] = Fa[a - 1]) : (F[a] = F[a - 1] + ((" " + l[0][a][0] + " ").length - (" " + l[0][a][0] + " ").replace(/([\u0020\u0627\u0641\u0648][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*\u0644[\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*\u0644[\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*\u0647[\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed\u000d]*)\u0020/g, "$1").length), Fa[a] = F[a] > F[a - 1] ? Fa[a - 1] + V(a) : Fa[a - 1])
        }
        if (G == f || Ga == f) {
            G = Array(115);
            for (a = 1; a != 115; a++) G[a] = zb(a) > 0 ? (l[0][U(a, 1)][0] + l[0][U(a, 2)][0]).substring(0, zb(a)) : "";
            Ga = Array(6347);
            for (a = 1; a != 115; a++)
                if (c = zb(a), c > 0)
                    for (var b = U(a, 0), e = U(a, W(a)), g = b; g <= e; g++)
                        if (Ga[g] = Array(c), g > b)
                            for (var d = 0; d != c; d++) Ga[g][d] = Ga[g - 1][d], Ga[g][d] += Ab(G[a].charCodeAt(d), g);
                        else
                            for (d = 0; d != c; d++) Ga[g][d] = Ab(G[a].charCodeAt(d), g)
        }
        P = [];
        a = G[7];
        P.push(a);
        P[a] = [7];
        a = G[13];
        P.push(a);
        P[a] = [13];
        a = G[19];
        P.push(a);
        P[a] = [19];
        a = G[2];
        P.push(a);
        P[a] = [2, 3, 29, 30, 31, 32];
        a = G[42].slice(2);
        P.push(a);
        P[a] = [42];
        a = G[40];
        P.push(a);
        P[a] = [40, 41, 42, 43, 44, 45, 46];
        a = G[10];
        P.push(a);
        P[a] = [10, 11, 12, 14, 15];
        a = G[38];
        P.push(a);
        P[a] = [7, 19, 38];
        a = G[19].charAt(1) + G[26];
        P.push(a);
        P[a] = [19, 20, 26, 27, 28];
        a = G[36];
        P.push(a);
        P[a] = [36]
    }
}

function Ab(a, b) {
    switch (a) {
        case 1575:
            return l[0][b][0].length - l[0][b][0].replace(/[\u0621\u0622\u0623\u0625\u0627]/g, "").length;
        case 1607:
            return l[0][b][0].length - l[0][b][0].replace(/[\u0629\u0647]/g, "").length;
        case 1610:
            return l[0][b][0].length - l[0][b][0].replace(/[\u0626\u0649\u064a]/g, "").length;
        default:
            return l[0][b][0].length - l[0][b][0].replace(RegExp("\\u0" + a.toString(16), "g"), "").length
    }
}

function Bb(a) {
    if (V(a) == 0) return Ga[a].slice(0);
    for (var b = zb(X(a)), c = Array(b), e = 0; e != b; e++) c[e] = Ga[a][e] - Ga[a - 1][e];
    return c
}

function Cb(a) {
    return a.replace(/[\u0610-\u061a\u0640\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]/g, "")
}

function Db(a) {
    return String(a).replace(/(\d+):(\d+)/g, "$2:$1")
}

function Eb(a) {
    for (var b = a.length, c = "", e, g = 0; g != b; g++) e = a.charCodeAt(g), c += 47 < e && e < 58 ? String.fromCharCode(e + 1584) : a.charAt(g);
    return c
}

function Fb(a) {
    for (var b = a.length, c = "", e, g = 0; g != b; g++) e = a.charCodeAt(g), c += 47 < e && e < 58 ? String.fromCharCode(e + 1728) : a.charAt(g);
    return c
}

function X(a) {
    var b = 0,
        c = 0;
    if (a < 1 || a > 6346) return -1;
    for (b = 1; b <= 114; b++)
        if (c += h[b] + aa[b], a <= c) return b;
    return -1
}

function V(a) {
    var b = 0,
        c = 0;
    if (a < 1 || a > 6346) return -1;
    for (b = 1; b <= 114; b++)
        if (c += h[b] + aa[b], a <= c) return a - (c - h[b]);
    return -1
}

function U(a, b) {
    var c = 0,
        e = 0;
    if (a < 1 || a > 114) return -1;
    if (b > h[a]) return -1;
    if (b == 0 && aa[a] == 0) return -1;
    for (c = 1; c <= a - 1; c++) e += h[c] + aa[c + 1];
    return e + b
}

function W(a) {
    return a >= 1 && a <= 114 ? h[a] : -1
}

function zb(a) {
    return a >= 1 && a <= 114 ? i[a] : -1
}

function Gb(a) {
    return a >= 1 && a <= 114 ? j[a] : -1
}

function wb(a) {
    for (var b = 0; b != C.length; b++)
        if (C[b][1] == a) return b;
    return 1
}

function R() {
    return parseInt(D.ABP)
}

function ib() {
    return parseInt(D.ABL)
}

function jb() {
    var a = parseInt(D.ABK);
    Ha.style.fontSize = parseInt(a) + "%";
    Ka.style.fontSize = parseInt(a) + "%"
}

function xb() {
    switch (R()) {
        case 0:
            return 100;
        case 1:
            return 100;
        case 2:
            return 100
    }
}

function yb() {
    switch (R()) {
        case 0:
            return 100;
        case 1:
            return 100;
        case 2:
            return 100
    }
}

function mb() {
    K.addEventListener("keydown", Hb, !1)
}

function nb(a, b) {
    for (var c = a.querySelectorAll("[data-MOO]"), e = c.length, g, d = 0; d != e; d++) {
        g = Ib(c[d]).split(":")[0].split(",");
        for (var o = 0; o != g.length; o++) b == 0 ? c[d].addEventListener(g[o], Hb, !1) : b == 1 && c[d].removeEventListener(g[o], Hb, !1)
    }
}

function Hb(a) {
    a.stopPropagation();
    switch (a.type.toLowerCase()) {
        case "keydown":
            if (K.getElementById("ADJ") != f) a.keyCode == 27 && Jb(!1);
            else switch (a.keyCode) {
                case 13:
                    if (R() == 1 || R() == 2) {
                        Kb();
                        break
                    }
                    a.target.id == "AAU" ? (a = K.getElementById("AAU"), pa.valueOf() != a.value.valueOf() && a == K.activeElement ? (Lb(), a.blur()) : a == K.activeElement ? a.blur() : (a.select(), a.focus()), L.focus()) : (K.getElementById("AAU").select(), K.getElementById("AAU").focus());
                    break;
                case 37:
                    if (a.target.id != "AAU") {
                        if (p == r && p != 0 && r != 0) a.shiftKey || a.ctrlKey ? Mb() : p > 1 && ob(X(p - 1) + ":" + V(p - 1));
                        else if (p != 0 && r != 0) a = Nb(), a[0] != -1 && ob(a[0] + ":" + a[1] + "-" + a[2]);
                        else if (p == 0 && r == 0 && (y == 30 || y == 31)) ya > 0 && ya--, Ob(), Pb();
                        window.getSelection().removeAllRanges()
                    }
                    break;
                case 39:
                    a.target.id != "AAU" && (p == r && p != 0 && r != 0 ? a.shiftKey || a.ctrlKey ? Qb() : p < 6346 && ob(X(p + 1) + ":" + V(p + 1)) : p != 0 && r != 0 ? (a = Rb(), a[0] != -1 && ob(a[0] + ":" + a[1] + "-" + a[2])) : p == 0 && r == 0 && (y == 30 || y == 31) && Sb(), window.getSelection().removeAllRanges());
                    break;
                case 27:
                    Tb()
            }
            break;
        case "dragstart":
            var b = Ib(a.target).split(":").slice(1).join(":").split(","),
                c = parseInt(b[2]),
                b = parseInt(b[1]);
            if (a.target != f) {
                var e = "[" + X(b) + ":" + V(b) + "] ",
                    e = Ub(c, e);
                C[c][4] == "rtl" && (e = ma + e);
                var g;
                g = l[c][b][0];
                c == 0 && (g = g.replace(/([\u0626\u0628-\u062e\u0633-\u063a\u0641-\u0647\u0649\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)[\u0621]([\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*[\u0622-\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)/g, "$1\u0640\u0654$2"));
                g = c == 1 || c == 2 || c == 5 ? g.replace(RegExp(v[c][0], "g"), v[c][28]) : g;
                e += g + "\n";
                if (a.shiftKey || a.ctrlKey) Vb(c, b).length > 3 && (e = Vb(c, b) + "\n" + e), Wb(c, b).length > 3 && (e = e + Wb(c, b) + "\n");
                a.dataTransfer.setData("text/plain", "" + e + "");
                a.dataTransfer.effectAllowed = "copy"
            }
            break;
        case "click":
            switch (b = Ib(a.target).split(":").slice(1).join(":").split(","), b[0]) {
                case "ADF":
                    switch (a.target.id) {
                        case "AAK":
                            pb("/contents");
                            break;
                        case "AAS":
                            ui_evt_AAS();
                            break;
                        case "AAV":
                            Lb();
                            break;
                        case "AAW":
                            Tb();
                            break;
                        case "AAX":
                            pb("/mod19");
                            break;
                        case "AAL":
                            Kb();
                            break;
                        case "AAM":
                            p != 0 && p < 6346 && r != 0 && r < 6346 && (p == r ? ob(X(p + 1) + ":" + V(p + 1)) : (a = Rb(), ob(a[0] + ":" + a[1] + "-" + a[2])));
                            break;
                        case "AAN":
                            p != 0 && p > 1 && r != 0 && r > 1 && (p == r ? ob(X(p - 1) + ":" + V(p - 1)) : (a = Nb(), ob(a[0] + ":" + a[1] + "-" + a[2])));
                            break;
                        case "AAO":
                            p != 0 && r != 0 && (a = X(p), a < 114 && ob(a + 1));
                            break;
                        case "AAP":
                            p != 0 && r != 0 && (a = X(p), a > 1 && ob(a - 1));
                            break;
                        case "AAY":
                            Oa = !0;
                            M = Xb();
                            Yb();
                            pb(Na[M].substr(2));
                            break;
                        case "AAZ":
                            Oa = !0;
                            M = M == 0 ? Ma - 1 : M - 1;
                            Yb();
                            pb(Na[M].substr(2));
                            break;
                        case "AAQ":
                            p != 0 && r != 0 ? Qb() : y == 30 && Sb();
                            break;
                        case "AAR":
                            p != 0 && r != 0 ? Mb() : y == 30 && (ya > 0 && ya--, Ob(), Pb());
                            break;
                        case "ABB":
                            Zb();
                            break;
                        case "ABC":
                            Zb();
                            break;
                        case "ABE":
                            K.getElementById("ACQ").value = "";
                            K.getElementById("ACR").innerHTML = "";
                            K.getElementById("ACQ").focus();
                            break;
                        case "ABF":
                            g = String(K.getElementById("ACQ").value);
                            for (var d = g.length, a = "", o = 0, q = e = b = c = 0, t = 0, u = 0, t = 0; t < d; t++) o = g.charCodeAt(t), o < 48 || o > 57 || (c == 1 && (a += Math.floor(q), u++, u % 10 == 0 && (a += " ")), o -= 48, b = b * 10 + o, q = b / 19, b %= 19, q >= 1 && (c = 1), e++);
                            a += String(q.toFixed(2));
                            g = "";
                            g += '<div id="ACL">' + Y(44) + ": " + b + "</div>";
                            b == 0 && c == 1 && (g += '<div class="ACM">' + Y(45) + "</div>");
                            b != 0 && (g += '<div class="ACM">' + Y(46) + "</div>");
                            g += '<div class="ACM">' + Y(47) + ": " + e;
                            b == 0 && e % 19 == 0 && c == 1 && (g += " (19x" + e / 19 + ")");
                            g += '</div><div id="ACN">' + Y(48) + ':</div><div class="ACM">';
                            K.getElementById("ACR").innerHTML = g + a + "</div><br/>";
                            break;
                        case "ADK":
                            Jb(!0);
                            break;
                        case "ADM":
                            Jb(!1);
                            break;
                        case "ADL":
                            ab(), window.location.href = ""
                    }
                    break;
                case "cl":
                    switch (a.target.className) {
                        case "ABG":
                            ga != -1 ? (ga = -1, s == fa && (s = 1)) : s == fa ? s = 1 : (s += 5, s == fa && (s = 1)), $b(), L.scrollTop = 0
                    }
                    break;
                case "ogrp":
                    switch (b[1]) {
                        case "oc":
                            ia = !ia, $b(), L.scrollTop = 0
                    }
                    break;
                case "ADE":
                    pb(b[1]);
                    break;
                case "ADG":
                    c = b[1];
                    p == r && p != 0 ? (a = Array(3), a[0] = X(c), a[1] = V(c), a[2] = a[1] + (S() - 1), c = W(a[0]), a[2] > c && (a[2] = c), a[1] == a[2] && a[1]--, pb(a[0] + ":" + a[1] + "-" + a[2])) : pb(X(c) + ":" + V(c));
                    break;
                case "sini":
                    ga = b[1];
                    s == fa && (s = 1);
                    $b();
                    L.scrollTop = 0;
                    break;
                case "ABH":
                    ja = ++ja % 2;
                    $b();
                    L.scrollTop = 0;
                    break;
                case "s_tvs":
                    ta = !ta;
                    xa = "";
                    ac(qa);
                    Ob();
                    Pb();
                    break;
                case "s_tss":
                    ua = !ua;
                    xa = "";
                    ac(qa);
                    Ob();
                    Pb();
                    break;
                case "s_tfs":
                    va = !va;
                    xa = "";
                    ac(qa);
                    Ob();
                    Pb();
                    break;
                case "s_tts":
                    Va = !Va;
                    xa = "";
                    ac(qa);
                    Ob();
                    Pb();
                    break;
                case "ABI":
                    bc();
                    break;
                case "AAW":
                    Tb()
            }
    }
}

function qb() {
    window.location.hash.search(/#/g) != -1 && window.unescape(window.location.hash.toString()).substr(1).replace(/_/g, " ") != K.getElementById("AAU").value && ob(window.unescape(window.location.hash.toString()).substr(1).replace(/_/g, " "))
}

function Ya() {
    switch (R()) {
        case 0:
            return '<div class="ABR"><div id="ABT"><span class="ABV">' + ('<span id="AAS">' + Y(58) + ":</span>") + cc() + Z("AAV", Y(57)) + dc() + ec() + '</span><span class="ABW">' + fc() + Z("AAX", "Mod 19") + gc() + '</span></div><div id="ABU"><span class="ABV">' + hc() + ic() + '</span><span class="ABW">' + jc() + kc() + lc() + mc() + "</span></div></div>";
        case 1:
            return '<div class="ABS"><div id="ABU"><span class="ABV">' + hc() + ic() + '</span><span class="ABW">' + jc() + kc() + lc() + mc() + '</span></div><div id="ABT"><span class="ABV">' + Z("AAL", Y(58)) + cc() + dc() + ec() + '</span><span class="ABW">' + fc() + Z("AAX", "Mod 19") + gc() + "</span></div></div>";
        case 2:
            return '<div class="nav2"><div id="ABU"><span class="ABV">' + hc() + ic() + '</span></div><div id="ABT"><span class="ABV"><span>' + Z("AAL", Y(58)) + cc() + "</span><span>" + dc() + ec() + "</span><span>" + gc() + fc() + '</span></span><span class="ABW">' + jc() + kc() + lc() + mc() + "</span></div></div>"
    }
}

function Y(a) {
    var b = v[C[window.navigator.language == f ? 1 : wb(window.navigator.language.substr(0, 2).toLowerCase())][5]][a];
    if (b != f) return b;
    b = v[1][a];
    return b != f ? b : ""
}

function pb(a) {
    K.getElementById("AAU").value = a;
    Lb()
}

function Lb() {
    r = p = 0;
    var a = K.getElementById("AAU").value.toString().trim();
    if (bb() && Ra != f) window.location.hash = window.escape(a.trim().replace(/ /g, "_"));
    Ra = 0;
    if (ac(a)) {
        Oa ? Oa = !1 : y > 0 && nc(String(y) + a);
        pa != f && (La = pa);
        switch (y) {
            case 20:
                $b();
                break;
            case 30:
                Ob();
                break;
            case 10:
                switch (pa) {
                    case "/about":
                        a = '<div id="ADY"' + ub(rb()) + ">" + l[rb()][8][0] + "</div>";
                        a += '<div id="ADZ">Quran Inspector</div>';
                        a += '<div id="AEA">&#169;2010-2016 ' + oc(v[m][0]) + Y(10) + "</div>";
                        a += '<div id="AEB"' + ub(1) + ">" + Y(11) + "<br/>" + pc(rb(), 70) + ", " + pc(rb(), 742) + "</div>";
                        a += '<div id="AEC"><span class="ACF" ' + $("click", "ADE,/contents") + ">" + Y(1) + '</span><span style="margin-left: 3em;" class="ACF" ' + $("click", "ADE,/manual") + ">" + Y(59) + "</span></div>";
                        a += '<div id="AED">' + v[m][2] + "</div>";
                        a += '<div class="AEE">' + Y(13) + " " + (ea - da) + " " + Y(14) + "</div>";
                        a += '<div class="AEE">' + Y(15) + " " + oc(v[m][1]) + "</div>";
                        a += '<div id="AEF">' + Y(16) + " " + oc(Y(90)) + ". " + Y(17) + "</div>";
                        L.innerHTML = a;
                        nb(L, 0);
                        break;
                    case "/mod19":
                        a = Array(22);
                        a[0] = Y(54) + " 1-1";
                        a[1] = Y(54) + " 1-2";
                        a[2] = Y(54) + " 1-3";
                        a[3] = Y(54) + " 1-4";
                        a[4] = Y(54) + " 1-5";
                        a[5] = Y(54) + " 1-6";
                        a[6] = Y(54) + " 1-7";
                        a[7] = Y(54) + " 1-8";
                        a[8] = Y(54) + " 1-9";
                        a[9] = Y(54) + " 1-10";
                        a[10] = Y(54) + " 1-11";
                        a[11] = Y(54) + " 1-12";
                        a[12] = Y(54) + " 1-13";
                        a[13] = Y(54) + " 1-14";
                        a[14] = Y(54) + " 1-15";
                        a[15] = Y(55) + "24-" + Y(56) + " 63";
                        a[16] = Y(55) + "24-" + Y(56) + " 64";
                        a[17] = Y(55) + "24-" + Y(56) + " 65";
                        a[18] = "S.P. nov 1989 - 1";
                        a[19] = "S.P. nov 1989 - 2";
                        a[20] = "n14453d";
                        a[21] = "n20257d";
                        var b = '<div id="ACO">';
                        b += '<div id="ACP">' + Y(49) + "</div>";
                        b += '<div><textarea id="ACQ" rows="14" cols="60"></textarea>';
                        b += '<select id="ABI" size="16" ' + $("click", "ABI") + ">";
                        b += '<option value="0" selected>' + a[0] + "</option>";
                        for (var c = 1; c != a.length; c++) b += '<option value="' + c + '">' + a[c] + "</option>";
                        b += "</select></div>";
                        b += '<div><input type="button" id="ABF" value="' + Y(50) + '" ' + $("click", "ADF") + " >";
                        b += '<input type="button" id="ABE" value="' + Y(51) + '" ' + $("click", "ADF") + " >";
                        b += '<input type="radio" id="ABB" name="ABD" value="1" checked="checked" ' + $("click", "ADF") + " />" + Y(52) + "";
                        b += '<input type="radio" id="ABC" name="ABD" value="0"  ' + $("click", "ADF") + " />" + Y(53) + "</div>";
                        b += '<div id="ACR"></div>';
                        b += "</div>";
                        L.innerHTML = b;
                        nb(L, 0);
                        L.scrollTop = 0;
                        K.getElementById("ACQ").focus();
                        break;
                    case "/manual":
                        qc();
                        break;
                    case "/reset":
                        ab();
                        window.location.href = "";
                        break;
                    default:
                        a = '<div class="ACY">' + Y(1) + "</div>";
                        a += '<div class="ACZ"><span class="ACF" ' + $("click", "ADE,/about") + ">" + Y(2) + "</span></div>";
                        a += '<div class="ACZ"><span class="ACF" ' + $("click", "ADE,/manual") + ">" + Y(59) + "</span></div>";
                        if (R() == 1 || R() == 2) a += '<div class="ACZ"><span class="ACF" ' + $("click", "ADE,/mod19") + ">Mod 19</span></div>";
                        R() == 2 && (a += '<div class="ACZ"><span class="ACF" ' + $("click", "AAW") + ">" + Y(62) + "</span></div>");
                        a += '<table class="ACX"><tr><th></th><th>' + Y(3) + "</th>";
                        tb() && sb() && (a += '<th class="ABW"></th>');
                        a += '<th class="ABW">' + Y(4) + '</th><th class="ABW ro">' + Y(5) + "</th>";
                        sb() && (a += '<th class="ABW">' + Y(6) + "</th>");
                        a += "</tr>";
                        for (var c = rb(), e = ub(c), g = ub(0), d = 1; d != 115; d++)
                            if (b = zb(d), a += '<tr class="ADD" ' + $("click", "ADE," + d) + "><td>" + d + ".</td>", tb() && (a += "<td " + e + ">" + k[c][d] + "</td>"), sb() && (a += '<td class="ABW"' + g + ">" + k[0][d] + "</td>"), a += '<td class="ABW">' + W(d) + '</td><td class="ABW">' + Gb(d) + "</td>", sb()) {
                                a += "<td " + g + ">";
                                if (b > 0)
                                    for (var o = 0; o != b; o++) a += G[d].charAt(o), o + 1 != b && (a += " ");
                                else b > 0 && (a += b);
                                a += "</td></tr>"
                            } else a += "<td></td></tr>";
                        a += "</table>";
                        if (tb()) {
                            a += '<div class="ADA">';
                            a += '<div class="ADB">' + Y(7) + "</div><br/>";
                            a += '<div class="ADC"><a href="' + ca[c][1] + '" target="_blank">' + ca[c][0] + "</a></div><br/>";
                            if (ba[c][1] != f) {
                                a += "<div>" + Y(9) + ":</div><br/>";
                                for (d = 1; d != ba[c].length; d++) a += '<div class="ADC"' + e + '><a href="' + ba[c][d][1] + '" target="_blank">' + d + ". " + ba[c][d][0] + "</a></div>"
                            } else ba[c][0] != f && (a += '<div class="ADC"' + e + '><a href="' + ba[c][0][1] + '" target="_blank">' + ba[c][0][0] + "</a></div>");
                            a += "</div>"
                        }
                        L.innerHTML = a;
                        nb(L, 0)
                }
        }
        Pb()
    } else if (La != f) K.getElementById("AAU").value = La, Lb()
}

function $b() {
    p = na;
    r = oa;
    pa.charCodeAt(pa.length - 1) != 43 && wa != 3 && r - p > S() && (r = p + (S() - 1));
    var a = "",
        b;
    b = X(p);
    var c = '<div id="ACB"><div id="ABX">' + Y(3) + " " + b + ": ";
    tb() && (c += "<span" + ub(rb()) + ">" + k[rb()][b] + "</span>");
    sb() && (c += la + " ( <span" + ub(0) + ">" + k[0][b] + "</span> )" + la);
    c += '<div id="ABY">' + Y(20) + " ";
    var e = '<span class="ACA">' + b + ":" + V(p);
    r > p && (e += "-" + V(r));
    p == r && (e += " (" + la + p + ")" + la);
    e += "</span>";
    c += e;
    c += "</div></div>";
    c += '<span class="ABZ">' + W(b) + " " + Y(23) + "</span>";
    c += '<span class="ABZ">' + Y(38) + " " + Gb(b) + "</span>";
    if (zb(b) > 0 && sb()) {
        e = zb(b);
        c += '<span class="ABZ">' + Y(39) + ": " + n[b] + " (";
        for (var g = 0; g != e; g++) c += "<span" + ub(0) + ">" + G[b].charAt(g) + "</span>", c += e - g == 1 ? ")</span>" : " "
    } else zb(b) > 0 && (c += '<span class="ABZ">' + Y(39) + ": " + n[b] + "</span>");
    c += "</div>";
    b = c;
    p == r && sb() && G[ha] != G[X(p)] && (ga = -1, ha = X(p));
    c = '<div class="AAH">';
    for (e = p; e <= r; e++) c += rc(e);
    if (L != f) L.innerHTML = a + (b + (c + "</div>")), nb(L, 0)
}

function Ob() {
    var a = "",
        b;
    b = '<span id="AAB">' + Y(18) + " " + (sa + ra);
    b += " " + Y(19);
    var c = ya * S(),
        e = ya * S() + S();
    e > sa + ra && (e = sa + ra);
    b += "</span>";
    b += sa + ra > S() ? '<span id="AAA">' + Y(20) + " " + (c + 1) + "-" + e + "</span>" : '<span id="AAA">' + Y(21) + "</span>";
    b += '<div id="AAC">' + Y(22) + " ";
    c = ta ? "checked" : "";
    b += '<input type="checkbox" ' + c + " " + $("click", "s_tvs") + "/>" + Y(23) + ", ";
    c = ua ? "checked" : "";
    b += '<input type="checkbox" ' + c + " " + $("click", "s_tss") + "/>" + Y(24) + ", " + Y(25) + " ";
    c = va ? "checked" : "";
    b += '<input type="checkbox" ' + c + " " + $("click", "s_tfs") + "/>" + Y(26) + ".";
    sb() && (b += "<br/>", c = Va ? "checked" : "", b += '<input type="checkbox" ' + c + " " + $("click", "s_tts") + "/>" + Y(94) + ".");
    b += "</div>";
    var c = '<div class="AAH">',
        g = ya * S(),
        e = ya * S() + S();
    e > sa + ra && (e = sa + ra);
    for (var d = 0; g != e; g++) d = A[g], c += rc(d);
    e = K.getElementById("AAI");
    if (e != f) e.innerHTML = a + (b + (c + "</div>")), nb(e, 0)
}

function sc() {
    var a = Array(3);
    sa > 0 && (a[2] = RegExp(!Va ? Cb(qa) : qa, "gi"));
    if (ra > 0) {
        a[1] = "";
        for (var b = 0; b != z.length; b++) a[1] += z[b], b < z.length - 1 && (a[1] += "|");
        a[1] = RegExp(a[1], "gi")
    }
    return a
}

function tc(a, b) {
    return w != f && w[b] != 0 ? a.replace(za[w[b]], '<span class="AAD">$&</span>') : a
}

function qc() {
    fb(Aa + C[rb()][7], function() {
        L.innerHTML = this.responseText
    })
}

function Pb() {
    if (Ha != f) {
        Yb();
        var a = K.getElementById("AAP"),
            b = K.getElementById("AAO");
        if (p != 0 && r != 0) {
            a.style.display = "";
            b.style.display = "";
            var c = X(p);
            a.disabled = c > 1 ? !1 : !0;
            b.disabled = c < 114 ? !1 : !0
        } else a.disabled = !0, b.disabled = !0, a.style.display = "none", b.style.display = "none";
        a = K.getElementById("AAN");
        if (p != 0 && r != 0) {
            a.style.display = "";
            if (p == r || p == 1) a.innerHTML = Y(42);
            else if (b = Nb(), b[0] != -1) a.innerHTML = b[0] + ":" + b[1], b[1] != b[2] && (a.innerHTML += "-" + b[2]);
            a.disabled = p > 1 ? !1 : !0
        } else a.style.display = "none", a.disabled = !0;
        a = K.getElementById("AAM");
        if (p != 0 && r != 0) {
            a.style.display = "";
            if (p == r || r == 6346) a.innerHTML = Y(43);
            else if (b = Rb(), b[0] != -1) a.innerHTML = b[0] + ":" + b[1], b[1] != b[2] && (a.innerHTML += "-" + b[2]);
            a.disabled = r < 6346 ? !1 : !0
        } else a.style.display = "none", a.disabled = !0;
        a = K.getElementById("AAR");
        b = K.getElementById("AAQ");
        if (sa + ra > 0 && A != f && p == r && (p != 0 && R() != 1 && R() != 2 || y == 30))
            if (a.style.display = "", b.style.display = "", p != 0 && r != 0) a.innerHTML = Y(32), b.innerHTML = Y(33), a.disabled = p > A[0] ? !1 : !0, b.disabled = p < A[A.length - 1] ? !1 : !0;
            else {
                if (y == 30) a.innerHTML = Y(30), b.innerHTML = Y(31), a.disabled = ya > 0 ? !1 : !0, b.disabled = ya * S() + S() < sa + ra ? !1 : !0
            }
        else a.style.display = "none", b.style.display = "none";
        K.getElementById("ABU").style.display = (y == 20 || y == 30) && R() != 2 ? "block" : "none";
        L.scrollTop = 0;
        L.focus()
    }
}

function Yb() {
    var a = K.getElementById("AAY");
    K.getElementById("AAZ").disabled = Na[M == 0 ? Ma - 1 : M - 1].length > 0 ? !1 : !0;
    a.disabled = Na[Xb()].length > 0 ? !1 : !0
}

function Xb() {
    return M == Ma - 1 ? 0 : M + 1
}

function nc(a) {
    a.valueOf() != Na[M].valueOf() && (a.substr(0, 2) == "vl" && Na[M].substr(0, 2) == "vl" ? (Na[M] = a, Na[Xb()] = "") : a.valueOf() != Na[M].valueOf() && (M = Xb(), Na[M] = a, Na[Xb()] = "", Yb()))
}

function ob(a) {
    nc("vl" + a);
    Oa = !0;
    pb(a)
}

function lb() {
    if (K != f && window.innerWidth + "-" + window.innerHeight + "-" + Ha.clientHeight != Sa) {
        Sa = window.innerWidth + "-" + window.innerHeight + "-" + Ha.clientHeight;
        if (L != f && Ha != f && Ia != f && Ka != f) L.style.height = window.innerHeight - (parseInt(Ha.offsetHeight) + 0) + "px";
        for (var a = uc(), b = K.querySelectorAll("#AAI .AAF, #AAI .AEI"), c = 0; c != b.length; c++) b[c].style.width = a + "px";
        Ia.style.width = window.innerWidth + "px";
        Ia.style.height = window.innerHeight + "px";
        vc();
        wc();
        R() == 2 && window.scrollTo(0, 1)
    }
}

function rc(a) {
    var b = '<div class="ACD">';
    if (y == 30 && ua || parseInt(D.ABN) == 1) {
        var c = b,
            e = '<div class="ACE';
        a == p && (e += " ACC");
        e += '">';
        for (b = 0; b != D.ABJ.length; b++)
            if (T(b) > -1) {
                var g = T(b),
                    d = a,
                    o = '<div class="AEI"' + ub(g) + ' style="width:' + uc() + 'px;"><div class="AEH">',
                    q = '<span class="ACG">',
                    t = f,
                    t = ua && y == 30 ? tc(xc(g, d), d) : xc(g, d);
                t.length > 0 && (q += t);
                e += o + (q + "</span>") + "</div></div>"
            }
        b = c + (e + "</div>")
    }
    for (c = 0; c != D.ABJ.length; c++)
        if (T(c) > -1) {
            g = T(c);
            e = a;
            d = '<div class="AAF"' + ub(g) + ' style="width:' + uc() + 'px;">';
            d += '<div class="AAE">';
            d += pc(g, e);
            var o = g,
                q = e,
                t = f,
                u = l[o][q][0];
            o == 0 && y != 30 && (u = u.replace(/([\u0626\u0628-\u062e\u0633-\u063a\u0641-\u0647\u0649\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)[\u0621]([\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*[\u0622-\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)/g, "$1\u0640\u0654$2"));
            if (o == 0 && Q[q] != f && (t = q, p == r)) {
                if (Q[t][0] != Bb(t)[0] || Q[t][1] != Bb(t)[1]) u = '<span class="AEK">' + u + "</span>";
                if (Q[t].length > 2)
                    for (var H = 2; H != Q[t].length; H++) u = u.replace(Q[t][H], '<a href="' + yc(t) + '" target="_blank"><span class="AEL AEM">*<span>$&</span></span></a>')
            }
            t = o == 1 || o == 2 || o == 5 ? p == r && y != 30 ? u.replace(RegExp(v[o][0], "g"), "<b>" + v[o][28] + "</b>") : u.replace(RegExp(v[o][0], "g"), v[o][28]) : u;
            ta && y == 30 && (o == 0 && (t = !Va ? Cb(t) : t), t = tc(t, q), o == 0 && (t = t.replace(/([\u0626\u0628-\u062e\u0633-\u063a\u0641-\u0647\u0649\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)[\u0621]([\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*[\u0622-\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*)/g, "$1\u0640\u0654$2")));
            o != 0 && (t = t.replace(/\u0028/g, '<span class="AEO">(').replace(/\u0029/g, ")</span>"));
            d += '<span class="AAG">' + t + "</span>";
            if (y == 30 && va || parseInt(D.ABO) == 1) o = g, q = e, t = f, t = va && y == 30 ? tc(zc(o, q), q) : zc(o, q), d += t.length > 3 ? '<span class="ACH">' + t + "</span>" : "";
            if (g == 0 && p == r && zb(X(e)) > 0 && p != 0) {
                q = e;
                o = '<hr/><div class="ACI" dir="ltr">';
                if (s != fa) {
                    t = '<span class=""' + ub(0) + ">";
                    u = f;
                    if (zb(X(q)) > 0 && s != fa) {
                        for (var u = X(q), H = zb(u), I = Cb(l[0][q][0]), x = 0; x <= H; x++)
                            if (ga == -1 || ga == x) switch (G[u].charCodeAt(x)) {
                                case 1575:
                                    I = I.replace(/[\u0621\u0622\u0623\u0625\u0627][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*/g, '<span class="ACK' + (x + s) + '">$&</span>');
                                    break;
                                case 1607:
                                    I = I.replace(/[\u0629\u0647][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*/g, '<span class="ACK' + (x + s) + '">$&</span>');
                                    break;
                                case 1610:
                                    I = I.replace(/[\u0626\u0649\u064a][\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*/g, '<span class="ACK' + (x + s) + '">$&</span>');
                                    break;
                                default:
                                    I = I.replace(RegExp("\\u0" + G[u].charCodeAt(x).toString(16) + "[\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06df-\u06ed]*", "g"), '<span class="ACK' + (x + s) + '">$&</span>')
                            }
                            u = I
                    } else u = "";
                    o += t + u + "</span>"
                }
                H = X(q);
                t = zb(H);
                if (t > 0) {
                    o += '<div class ="inco"><table class="inco_tbl"><thead><tr><th class="ABG" ' + $("click", "cl") + " >" + Y(37) + "</th>";
                    for (u = t - 1; u != -1; u--) {
                        o += "<th ";
                        if (ga == -1 || ga == u) o += 'class="ACK' + (s + u) + '" ';
                        o += $("click", "sini," + u) + ' style="cursor: pointer;"' + ub(0) + " >" + G[H].charAt(u) + "</th>"
                    }
                    H = "</tr></thead><tbody><tr " + $("click", "ABH") + " ><td>" + X(q) + ":" + V(q) + "</td>";
                    I = Bb(q);
                    for (u = t - 1; u != -1; u--) H += "<td>" + I[u] + "</td>";
                    H += "</tr><tr " + $("click", "ABH") + " ><td>" + X(q) + ":0-" + V(q) + "</td>";
                    I = Ga[q].slice(0);
                    for (u = t - 1; u != -1; u--) H += "<td>" + I[u] + "</td>";
                    o += ja == 1 ? Eb(Db(H)) : ja == 2 ? Fb(Db(H)) : H;
                    o += "</tr></tbody></table></div>"
                }
                Q[q] != f && (Q[q][0] != Bb(q)[0] && (o += Ac('"\u0627" (Alef)', Q[q][0])), Q[q][1] != Bb(q)[1] && (o += Ac('"\u0644" (Laam)', Q[q][1])), Q[q].length > 2 && Ua[q] == f && (o += '<span class="ACH AEL" style="color: #000000;">' + Y(93) + "</span>"));
                Ua[q] != f && (o += Ua[q]());
                if (V(q) == W(X(q)) || V(q) == 0) {
                    if (G[X(q)].length == 1 && Bc(X(q)) == f) q = '<p style="text-align: center; margin: 0px auto; margin-top: 1.2em; font-weight: bold;">' + Cc(Dc(X(q))).replace("<br/>", " = ").replace(/\(|\)/g, "") + "</p>";
                    else {
                        q = Bc(X(q));
                        u = "";
                        for (t = 0; t != q.length; t++) {
                            for (var H = q[t], x = P[H], I = [], J = f, B = f, E = 0; E != x.length; E++) {
                                J = [];
                                J.push(x[E]);
                                for (var N = 0; N != H.length; N++) B = Ga[U(x[E], W(x[E]))].slice(0)[G[x[E]].indexOf(H[N])], B == f && (B = 0), J.push(B);
                                I.push(J)
                            }
                            x = [];
                            J = f;
                            J = [];
                            J.push(Y(3));
                            for (B = 0; B != H.length; B++) J.push(H[B]);
                            J.push(Y(65));
                            x.push(J);
                            for (B = 0; B != I.length; B++) {
                                J = [];
                                for (E = 0; E != I[B].length; E++) J.push(I[B][E]);
                                for (var E = I[B], N = 0, Ja = 1; Ja != E.length; Ja++) N += E[Ja];
                                J.push(N);
                                x.push(J)
                            }
                            N = f;
                            E = 0;
                            J = [];
                            J.push(Y(65));
                            for (B = 1; B != I[0].length; B++) {
                                for (Ja = N = 0; Ja != I.length; Ja++) N += I[Ja][B];
                                J.push(N);
                                E += N
                            }
                            J.push(E);
                            x.push(J);
                            I = x.length < 4 ? x.length - 1 : x.length;
                            J = x[0].length < 4 ? x[0].length - 1 : x[0].length;
                            B = "<table><thead><tr>";
                            for (E = 0; E != J; E++) B += "<th>" + x[0][E] + "</th>";
                            B += "</tr></thead><tbody>";
                            for (E = 1; E != I; E++) {
                                B += "<tr>";
                                for (N = 0; N != J; N++) B += "<td>", E == x.length - 1 && N == 0 ? B += '<span style="font-weight: bold;">' + x[E][N] + "<span>" : N != 0 && x[E][N] % 19 == 0 && x[E][N] != 0 && (I < 3 || E == I - 1 && N == J - 1) ? B += Cc(x[E][N]) : x[E][N] != 0 && (B += x[E][N]), B += "</td>";
                                B += "</tr>"
                            }
                            ja == 1 && (B = Eb(Db(B)));
                            ja == 2 && (B = Fb(Db(B)));
                            I = B + "</tbody></table>";
                            x = "";
                            switch (H) {
                                case G[2]:
                                    x += Y(84).replace(/%%I/g, n[2].replace(/\./g, "")).replace("%%L", oc(Y(88)));
                                    break;
                                case G[10]:
                                    x += Y(84).replace(/%%I/g, n[10].replace(/\./g, "")).replace("%%L", oc(Y(88)));
                                    break;
                                case G[13]:
                                    x += Y(85).replace(/%%I/g, n[13].replace(/\./g, "")).replace("%%L", oc(Y(89)));
                                    break;
                                case G[7]:
                                    x += Y(85).replace(/%%I/g, n[7].replace(/\./g, "")).replace("%%L", oc(Y(89)))
                            }
                            J = f;
                            x.length != 0 ? (H = P[H], J = '<span class="ACH">' + x.replace("%%C", H.length == 1 ? H[0] : "(" + H.join(", ") + ")") + " " + Y(86).replace("%%L", oc(Y(90))) + "</span>") : J = x;
                            u += I + J
                        }
                        q = u
                    }
                    H = q;
                    o += '<div class="ADU">';
                    o += H;
                    o += "</div>";
                    o += '<span class="ACH">' + Y(87) + "</span>"
                }
                d += o + "</div>"
            }
            if (g == rb() && p == r && p != 0) {
                var g = d,
                    ka;
                F != f && (ka = '<div class="ACJ">', F[e] != f && (ka += '<span class="oc">', ia && (ka += '<span class="oct">', ka += '<span class="oct_a" ' + $("click", "ogrp,oc") + " >" + Y(35) + "</span>", ka += '<span class="oct_b" ' + $("click", "ogrp,oc") + " >" + Y(36) + "</span>", ka += "</span>"), ka += "<div>", ka += '<span title="' + Y(35).replace(/\"/g, "'") + '" class="oca" ' + $("click", "ogrp,oc") + " >" + F[e] + "</span>", ka += '<span title="' + Y(36).replace(/\"/g, "'") + '" class="ocb" ' + $("click", "ogrp,oc") + " >" + Fa[e] + "</span></span>", ka += "</div>"), ka += "</div>");
                d = g + ka
            }
            b += d + "</div></div>"
        }
    return b + "</div>"
}

function uc() {
    for (var a = 0, b = 0; b != D.ABJ.length; b++) T(b) > -1 && a++;
    return parseInt(parseInt(L.clientWidth - 2) / a)
}

function pc(a, b) {
    var c = '<span draggable="true" class="ACF AAJ"' + $("click,dragstart", "ADG," + b + "," + a) + ">",
        e = X(b);
    if (p == r || V(b) != 0) e += ":" + V(b);
    return c + Ub(a, e) + "</span>"
}

function Ub(a, b) {
    C[a][4] == "rtl" && (b = Db(b));
    C[a][1] == "ar" && (b = Eb(b));
    C[a][1] == "fa" && (b = Fb(b));
    return b
}

function Ec() {
    Ua = [];
    Ua[U(3, 136)] = function() {
        return '<span class="ACH AEL" style="color: #000000;">' + Y(91).replace(/_/g, "<br/>").replace("%%L", oc(Y(90))) + "</span>"
    }
}

function yc(a) {
    a = Bc(X(a))[0];
    if (a == G[2] || a == G[10]) return Y(88).split(",")[0];
    if (a == G[7] || a == G[13]) return Y(89).split(",")[0]
}

function xc(a, b) {
    return l[a][b][1] != f ? l[a][b][1].replace(/_/g, "<br/>") : ""
}

function Vb(a, b) {
    return l[a][b][1] != f ? l[a][b][1].replace(/_/g, "\n") : ""
}

function zc(a, b) {
    if (l[a][b][2] != f) var c = l[a][b][2].replace(/_/g, "<br/>"),
        c = c.replace(/[|]/g, String.fromCharCode(9));
    else return "";
    c = c.replace(/\d+\:\d+\-?\d*/g, '<span class="ACF" ' + $("click", "ADE,$&") + " >$&</span>");
    c = c.replace('<span class="ACF" ' + $("click", "ADE,9:128-129") + " >9:128-129</span>", "9:128-129");
    return c = c.replace(/(\d+)\;(\d+\-?\d*)/g, "$1:$2")
}

function Wb(a, b) {
    if (l[a][b][2] != f) var c = l[a][b][2].replace(/_/g, "<br/>"),
        c = c.replace(/[|]/g, String.fromCharCode(9));
    else return "";
    return c
}

function Ac(a, b) {
    return '<span class="ACH AEK" style="color: #000000;">' + Y(92).replace("%%I", a).replace("%%N", b).replace("%%L", oc(Y(90))) + "</span>"
}

function Bc(a) {
    for (var b = [], c = 0; c != P.length; c++)
        for (var e = 0; e != P[P[c]].length; e++) a == P[P[c]][e] && b.push(P[c]);
    if (b.length != 0) return b
}

function Dc(a) {
    for (var b = 0, a = Ga[U(a, W(a))].slice(0), c = 0; c != a.length; c++) b += a[c];
    return b
}

function oc(a) {
    return '<a href="' + a.split(",")[0] + '" target="_blank">' + a.split(",")[1] + "</a>"
}

function Cc(a) {
    return (a % 19 == 0 && a != 0 ? '<span style="font-weight: bold;">' + a + "</span>" : "") + (a != 19 ? "<br/>(19 x " + a / 19 + ")" : "")
}

function hb() {
    for (var a = 0, b = String(v) + String(C), c = [], e = 0; e < Pa; e += Qa) c.push(e);
    for (var g = b.length, d = c.length, e = 0; e != g; e++) c[e % d] ^= (e + (c[(e - 1) % d] + 1) * b.charCodeAt(e)) % Pa;
    String(c) == String([Gb(92), Gb(Gb(75)), W(53), Gb(W(47))]) ? a++ : a--;
    return a < 0
}

function vc() {
    Ka.style.left = parseInt((window.innerWidth - Ka.clientWidth) / 2) + "px";
    Ka.style.top = parseInt((window.innerHeight - Ka.clientHeight) / 2) + "px"
}

function kb() {
    Ia.style.display = "none"
}

function Kb() {
    var a = prompt(Y(58) + ":", K.getElementById("AAU").value);
    a != null && a.length != 0 && pb(a)
}

function Tb() {
    nb(K, 1);
    Ia.style.display = "block";
    var a = Ka,
        b = '<div id="ADJ">',
        c = '<div class="ACW">';
    c += "<div>" + Y(62) + "</div>";
    b += c + "</div>";
    for (var e = '<div class="ACT"><span>' + Y(70) + "</span>", c = 0; c != Ea; c++) {
        e += '<p><label for="ADO' + String.fromCharCode(c + 65) + '">' + Y(71) + " " + (c + 1) + '</label><select id="ADO' + String.fromCharCode(c + 65) + '">';
        for (var g = c, d = [], o = 0; o != m; o++) d.push(C[o][3]);
        d.sort();
        var q = "";
        g != 0 && (q += '<option value="None" ', T(g) == -1 && (q += 'selected="true"'), q += ">" + Y(72) + "</option>");
        for (o = 0; o != d.length; o++) q += '<option value="' + d[o] + '"', T(g) != -1 && C[T(g)][3] == d[o] && (q += ' selected="true"'), q += ">" + d[o] + "</option>";
        e += q;
        e += "</select></p>"
    }
    c = '<div class="ACT"><span>' + Y(73) + "</span>";
    c += '<p><label for="ADP">' + Y(74) + '</label><select id="ADP">';
    c += Fc(0);
    c += "</select></p>";
    c += '<p><label for="ADQ">' + Y(75) + '</label><select id="ADQ">';
    c += Fc(1);
    c += "</select></p>";
    g = '<div class="ACT"><span>' + Y(80) + "</span>";
    g += '<p><label><input id="ADW" type="radio" name="ADV"';
    R() == 0 && (g += " checked ");
    g += "/>" + Y(81) + "</label></p>";
    g += '<p><label><input id="ADX" type="radio" name="ADV"';
    R() == 2 && (g += " checked ");
    g += "/>" + Y(82) + "</label></p>";
    d = '<div class="ACT"><span>' + Y(76) + "</span>";
    d += '<p><input type="checkbox" id="ADR"';
    parseInt(D.ABN) == 1 && (d += " checked ");
    d += "/>" + Y(77) + "</p>";
    d += '<p><input type="checkbox" id="ADS"';
    parseInt(D.ABO) == 1 && (d += " checked ");
    d += "/>" + Y(78) + "</p>";
    d += '<p><input type="checkbox" id="ADT"';
    bb() && (d += " checked ");
    d += "/>" + Y(79) + "</p>";
    b += '<div class="ACU">' + (e + "</div>") + "<hr/>" + (c + "</div>") + "<hr/>" + (g + "</div>") + "<hr/>" + (d + "</div>") + "</div>";
    c = '<div class="ACV">';
    c += "<div>";
    c += Z("ADK", Y(66));
    c += Z("ADM", Y(68));
    c += "</div>";
    c += "<div>" + Y(69) + "</div>";
    b += c + "</div>";
    a.innerHTML = b + "</div>";
    nb(Ka, 0);
    Ka.style.display = "block";
    vc();
    wc();
    K.getElementsByClassName("ACU")[0].focus()
}

function Jb(a) {
    if (!(k == f && hb())) K.removeEventListener("keydown", Hb, !1), a ? Gc() : (Ka.style.display = "none", Ka.innerHTML = "", nb(K, 0), mb(), kb())
}

function wc() {
    var a = K.getElementsByClassName("ACU")[0];
    if (a != f) a.style.height = K.getElementById("ADI").offsetHeight - (K.getElementsByClassName("ACW")[0].offsetHeight + K.getElementsByClassName("ACV")[0].offsetHeight) + "px"
}

function Gc() {
    for (var a = !1, b, c = 0; c != Ea; c++) b = D.ABJ[c], D.ABJ[c] = Hc(K.getElementById("ADO" + String.fromCharCode(c + 65)).value), b != D.ABJ[c] && (a = !0);
    D.ABL = K.getElementById("ADP").value;
    D.ABK = K.getElementById("ADQ").value;
    K.getElementById("ADW").checked ? b = 0 : b = 2;
    b != R() && (a = !0);
    D.ABP = b;
    K.getElementById("ADR").checked ? D.ABN = 1 : D.ABN = 0;
    K.getElementById("ADS").checked ? D.ABO = 1 : D.ABO = 0;
    K.getElementById("ADT").checked ? D.AEN = 1 : D.AEN = 0;
    a ? (Ka.innerHTML = '<div id="AEG">' + Y(83) + "</div>", cb(function() {
        Xa();
        gb();
        xa = f;
        Ic()
    })) : Ic()
}

function Ic() {
    localStorage.QI2_settings = JSON.stringify(D);
    L.style.fontSize = parseInt(ib()) + "%";
    jb();
    Sa = "";
    lb();
    Ka.style.display = "none";
    Ka.innerHTML = "";
    nb(K, 0);
    mb();
    kb();
    Oa = !0;
    Lb()
}

function Hc(a) {
    for (var b = 0; b != m; b++)
        if (a == C[b][3]) return b;
    return -1
}

function Fc(a) {
    for (var b = a == 0 ? 400 : 300, a = a == 0 ? ib() : parseInt(D.ABK), c = "", e = 50; e <= b; e += 25) c += '<option value="' + e + '"', e == a && (c += ' selected="true"'), c += ">" + e + "%</option>";
    return c
}

function fc() {
    return Z("AAK", Y(1))
}

function cc() {
    return '<input type="text" autocomplete="on" id="AAU" list="AAT" maxlength="80" value="" ' + $("keydown", "") + " />"
}

function gc() {
    return Z("AAW", Y(62))
}

function mc() {
    return Z("AAM", Y(43))
}

function lc() {
    return Z("AAN", Y(42))
}

function ic() {
    return Z("AAO", Y(41))
}

function hc() {
    return Z("AAP", Y(40))
}

function ec() {
    return Z("AAY", "&#62;&#62;")
}

function dc() {
    return Z("AAZ", "&#60;&#60;")
}

function kc() {
    return Z("AAQ", Y(33))
}

function jc() {
    return Z("AAR", Y(32))
}

function Z(a, b) {
    return '<button type="button" id="' + a + '"' + $("click", "ADF") + " >" + b + "</button>"
}

function $(a, b) {
    return ' data-MOO="' + a + ":" + b + '" '
}

function Ib(a) {
    return a.getAttribute("data-MOO") != null ? a.getAttribute("data-MOO") : a.parentNode.getAttribute("data-MOO")
}

function Nb() {
    var a = p,
        b = Array(3);
    b[0] = X(a - 1);
    b[2] = V(a - 1);
    b[1] = b[2] - (S() - 1);
    a = 1 - (b[0] >= 1 && b[0] <= 114 ? aa[b[0]] : -1);
    b[1] < a && (b[1] = a);
    b[1] == b[2] && b[2]++;
    return b
}

function Rb() {
    var a = r,
        b = Array(3);
    b[0] = X(a + 1);
    b[1] = V(a + 1);
    b[2] = b[1] + (S() - 1);
    a = W(b[0]);
    b[2] > a && (b[2] = a);
    b[1] == b[2] && b[1]--;
    return b
}

function ac(a) {
    if (a.length == 0) return y = 0, !1;
    for (var b = a.length, c = "", e, g = 0; g != b; g++) e = a.charCodeAt(g), c += 1631 < e && e < 1642 ? String.fromCharCode(e - 1584) : 1775 < e && e < 1786 ? String.fromCharCode(e - 1728) : a.charAt(g);
    pa = c.replace(/[\u0640][\u0654]/g, String.fromCharCode(1569));
    a = pa.toLowerCase().charCodeAt(0);
    if (a == 47) y = 10;
    else if (47 < a && a < 58) y = 20;
    else if (96 < a || a == 34 || a == 45) y = 30;
    else return y = 0, !1;
    if (y == 30) {
        if (xa == pa) return !0;
        xa = pa
    }
    if (y == 20) {
        z = pa.split(/\D+/, 10);
        b = Array(z.length);
        for (a = c = 0; a != z.length; a++) z[a].length > 0 && (b[c] = Number(z[a]), c++);
        wa = c;
        if (c > 0 && (b[0] < 1 || b[0] > 114)) return y = 0, !1;
        if (c == 1) return na = U(b[0], 0), na == -1 && (na = U(b[0], 1)), oa = U(b[0], W(b[0])), !0;
        if (c > 1 && (na = U(b[0], b[1]), na == -1 && (na = U(b[0], 1)), na == -1)) return y = 0, !1;
        if (c == 2) return oa = na, pa.charCodeAt(pa.length - 1) == 43 && (oa = U(b[0], W(b[0]))), !0;
        if (c >= 3) return oa = b[2] > b[1] ? b[2] <= W(b[0]) ? U(b[0], b[2]) : U(b[0], W(b[0])) : na, !0
    } else if (y == 30) {
        qa = pa.replace(/[\u0022]/g, "\\b");
        z = (!Va ? Cb(qa) : qa).split(/\s+/, 15);
        b = z.length;
        c = RegExp(!Va ? Cb(qa) : qa, "i");
        w = Array(6347);
        if (!Va && Wa == f) {
            Wa = Array(6347);
            for (a = 1; a != 6347; a++) Wa[a] = Cb(l[0][a][0])
        }
        if (b == 1) {
            for (var d = 0; d != Ea; d++)
                if (g = T(d), g != -1)
                    for (a = 1; a != 6347; a++) ta && (e = !Va && g == 0 ? Wa[a] : l[g][a][0], c.test(e) && (w[a] = 2)), ua && w[a] == f && c.test(l[g][a][1]) && (w[a] = 2), va && w[a] == f && c.test(l[g][a][2]) && (w[a] = 2);
            Jc();
            Kc();
            za = sc();
            return !0
        }
        e = 0;
        for (a = 1; a != b; a++) e = z[a].length > z[a - 1].length ? a : a - 1;
        e > 0 && (a = z[e], z[e] = z[0], z[0] = a);
        for (var o = Array(b), a = 0; a != b; a++) z[a].charCodeAt(0) == 45 ? (o[a] = !0, z[a] = z[a].substr(1)) : o[a] = !1;
        for (var q = Array(b), a = 0; a != b; a++) q[a] = RegExp(z[a], "i");
        for (var t, d = 0; d != Ea; d++)
            if (g = T(d), g != -1)
                for (a = 1; a != 6347; a++) {
                    if (ta) {
                        t = !0;
                        e = !Va && g == 0 ? Wa[a] : l[g][a][0];
                        for (var u = 0; u != b; u++)
                            if (o[u]) {
                                if (q[u].test(e)) {
                                    t = !1;
                                    break
                                }
                            } else if (!q[u].test(e)) {
                            t = !1;
                            break
                        }
                        t && (w[a] = 1, c.test(e) && (w[a] = 2))
                    }
                    if (ua && w[a] != 2 && l[g][a][1] != "") {
                        t = !0;
                        for (u = 0; u != b; u++)
                            if (o[u]) {
                                if (q[u].test(l[g][a][1])) {
                                    t = !1;
                                    break
                                }
                            } else if (!q[u].test(l[g][a][1])) {
                            t = !1;
                            break
                        }
                        t && (w[a] = 1, c.test(l[g][a][1]) && (w[a] = 2))
                    }
                    if (va && w[a] != 2 && l[g][a][2] != "") {
                        t = !0;
                        for (u = 0; u != b; u++)
                            if (o[u]) {
                                if (q[u].test(l[g][a][2])) {
                                    t = !1;
                                    break
                                }
                            } else if (!q[u].test(l[g][a][2])) {
                            t = !1;
                            break
                        }
                        t && (w[a] = 1, c.test(l[g][a][2]) && (w[a] = 2))
                    }
                }
            Jc();
        Kc();
        za = sc();
        return !0
    } else if (y == 10) return !0
}

function Jc() {
    sa = ra = 0;
    for (var a = 1; a != 6347; a++) w[a] == 2 && sa++, w[a] == 1 && ra++
}

function Kc() {
    var a = sa + ra;
    A = Array(a);
    for (var a = 0, b = 1; b != 6347; b++) w[b] == 2 && (A[a] = b, a++);
    for (b = 1; b != 6347; b++) w[b] == 1 && (A[a] = b, a++);
    ya = 0
}

function Sb() {
    ya * S() + S() < sa + ra && ya++;
    Ob();
    Pb()
}

function Mb() {
    if (p == r && sa + ra > 0 && A != f && p > A[0])
        for (var a = A[0], b = p - 1; b >= a; b--)
            if (w[b] != f) {
                ob(String(X(b) + ":" + V(b)));
                break
            }
}

function Qb() {
    if (p == r && sa + ra > 0 && A != f && p < A[A.length - 1])
        for (var a = A[A.length - 1], b = p + 1; b <= a; b++)
            if (w[b] != f) {
                ob(String(X(b) + ":" + V(b)));
                break
            }
}

function Lc() {
    var a = Number(K.getElementById("ABI").value),
        b = 0,
        c = 0,
        e = 0,
        g = 0,
        d = "";
    K.getElementById("ABB").checked ? O[9] = 127 : O[9] = 129;
    switch (a) {
        case 0:
            for (b = 1; b <= 114; b++) {
                d += O[b];
                d += " ";
                for (c = 1; c <= O[b]; c++) d += c, d += " "
            }
            return d;
        case 1:
            for (b = 1; b <= 114; b++) {
                e += O[b];
                for (c = 1; c <= O[b]; c++) d += c, d += " ";
                d += O[b];
                d += " "
            }
            d += e;
            d += " ";
            return d;
        case 2:
            for (b = 1; b <= 114; b++) {
                e += O[b];
                for (c = 1; c <= O[b]; c++) d += c, d += " ";
                d += b;
                d += " ";
                d += O[b];
                d += " "
            }
            d += e;
            d += " ";
            return d;
        case 3:
            for (b = 1; b <= 114; b++) {
                e += O[b];
                d += O[b];
                d += " ";
                for (c = 1; c <= O[b]; c++) d += c, d += " ";
                d += b;
                d += " "
            }
            d += e;
            d += " ";
            return d;
        case 4:
            for (b = 1; b <= 114; b++) {
                for (c = 1; c <= O[b]; c++) e += c, d += c, d += " ";
                d += e;
                d += " ";
                e = 0
            }
            return d;
        case 5:
            for (b = 1; b <= 114; b++) {
                for (c = 1; c <= O[b]; c++) e += c;
                d += e;
                d += " ";
                for (c = 1; c <= O[b]; c++) d += c, d += " ";
                e = 0
            }
            return d;
        case 6:
            for (b = 114; b >= 1; b--) {
                for (c = 1; c <= O[b]; c++) e += c, d += c, d += " ";
                d += e;
                d += " ";
                e = 0
            }
            return d;
        case 7:
            for (b = 1; b <= 114; b++) {
                g += O[b];
                for (c = 1; c <= O[b]; c++) e += c
            }
            d += e;
            d += " ";
            d += g;
            d += " ";
            d += "114";
            d += " ";
            for (b = 1; b <= 114; b++) d += b, d += " ", d += O[b], d += " ";
            return d;
        case 8:
            for (b = 1; b <= 114; b++) {
                g += O[b];
                for (c = 1; c <= O[b]; c++) e += c
            }
            d += e;
            d += " ";
            d += g;
            d += " ";
            d += "114";
            d += " ";
            for (b = 1; b <= 114; b++) d += O[b], d += " ", d += b, d += " ";
            return d;
        case 9:
            for (b = 1; b <= 114; b++) {
                for (c = 1; c <= O[b]; c++) e += c, g += c;
                d += g;
                d += " ";
                g = 0
            }
            d += e;
            d += " ";
            return d;
        case 10:
            d += "114";
            d += " ";
            for (b = 1; b <= 114; b++) c += O[b];
            d += c;
            d += " ";
            for (b = 1; b <= 114; b++) {
                for (c = 1; c <= O[b]; c++) e += c;
                d += b;
                d += " ";
                d += e;
                d += " ";
                e = 0
            }
            return d;
        case 11:
            for (b = 1; b <= 114; b++) {
                g += O[b];
                for (c = 1; c <= O[b]; c++) e += c
            }
            d += "114";
            d += " ";
            d += g;
            d += " ";
            d += e;
            d += " ";
            for (b = 1; b <= 114; b++) {
                d += b;
                d += " ";
                for (c = 1; c <= O[b]; c++) d += c, d += " "
            }
            return d;
        case 12:
            for (b = 1; b <= 114; b++) c += O[b];
            d += c;
            d += " ";
            for (b = 1; b <= 114; b++) d += O[b], d += " ";
            d += c;
            d += " ";
            return d;
        case 13:
            for (b = 1; b <= 114; b++) e += O[b];
            d += e;
            d += " ";
            d += "114";
            d += " ";
            for (b = 1; b <= 114; b++)
                for (c = 1; c <= O[b]; c++) d += c, d += " ";
            d += e;
            d += " ";
            d += "114";
            d += " ";
            return d;
        case 14:
            for (b = 1; b <= 114; b++) {
                for (c = 1; c <= O[b]; c++) d += c, d += " ";
                d += b + O[b];
                d += " "
            }
            return d;
        case 15:
            b = 9;
            d += b;
            d += " ";
            d += O[b];
            d += " ";
            for (c = 1; c <= O[b]; c++) d += c, d += " ";
            return d;
        case 16:
            for (b = 1; b <= 114; b++) {
                d += O[b];
                d += " ";
                for (c = 1; c <= O[b]; c += 2) d += String(c).charAt(String(c).length - 1), d += " "
            }
            return d;
        case 17:
            for (b = 1; b <= 114; b++)
                if (i[b] == 0)
                    for (c = 1; c <= O[b]; c++) d += c, d += " ";
            return d;
        case 18:
            for (b = 1; b <= 114; b++) {
                d += b;
                d += " ";
                d += O[b];
                d += " ";
                aa[b] == 1 && (d += "0", d += " ");
                for (c = 1; c <= O[b]; c++) d += c, d += " "
            }
            return d;
        case 19:
            for (b = 1; b <= 114; b++) {
                d += b + " ";
                aa[b] == 1 && (d += "0", d += " ", d += ++e, d += " ");
                for (c = 1; c <= O[b]; c++) d += c, d += " ", d += ++e, d += " "
            }
            return d;
        case 20:
            for (b = 1; b <= 114; b++)
                for (c = 1; c <= O[b]; c++) d += b + c, d += " ";
            return d;
        case 21:
            for (b = 1; b <= 114; b++) {
                for (c = 1; c <= O[b]; c++) e += c, d += e, d += " ";
                e = 0
            }
            return d;
        default:
            return ""
    }
}

function bc() {
    K.getElementById("ACQ").value = Lc()
}

function Zb() {
    bc();
    K.getElementById("ACR").innerHTML = ""
}
document.addEventListener("DOMContentLoaded", function() {
    da = Number(new Date);
    window.location.hostname.search(/www.submission.org/) != -1 && window.location.replace("http://submission.org/QI" + window.location.hash);
    Za(1);
    Aa = "/QI2d/";
    Ba = "|";
    Ca = "\n";
    h = Array(115);
    h[1] = 7;
    h[2] = 286;
    h[3] = 200;
    h[4] = 176;
    h[5] = 120;
    h[6] = 165;
    h[7] = 206;
    h[8] = 75;
    h[9] = 127;
    h[10] = 109;
    h[11] = 123;
    h[12] = 111;
    h[13] = 43;
    h[14] = 52;
    h[15] = 99;
    h[16] = 128;
    h[17] = 111;
    h[18] = 110;
    h[19] = 98;
    h[20] = 135;
    h[21] = 112;
    h[22] = 78;
    h[23] = 118;
    h[24] = 64;
    h[25] = 77;
    h[26] = 227;
    h[27] = 93;
    h[28] = 88;
    h[29] = 69;
    h[30] = 60;
    h[31] = 34;
    h[32] = 30;
    h[33] = 73;
    h[34] = 54;
    h[35] = 45;
    h[36] = 83;
    h[37] = 182;
    h[38] = 88;
    h[39] = 75;
    h[40] = 85;
    h[41] = 54;
    h[42] = 53;
    h[43] = 89;
    h[44] = 59;
    h[45] = 37;
    h[46] = 35;
    h[47] = 38;
    h[48] = 29;
    h[49] = 18;
    h[50] = 45;
    h[51] = 60;
    h[52] = 49;
    h[53] = 62;
    h[54] = 55;
    h[55] = 78;
    h[56] = 96;
    h[57] = 29;
    h[58] = 22;
    h[59] = 24;
    h[60] = 13;
    h[61] = 14;
    h[62] = 11;
    h[63] = 11;
    h[64] = 18;
    h[65] = 12;
    h[66] = 12;
    h[67] = 30;
    h[68] = 52;
    h[69] = 52;
    h[70] = 44;
    h[71] = 28;
    h[72] = 28;
    h[73] = 20;
    h[74] = 56;
    h[75] = 40;
    h[76] = 31;
    h[77] = 50;
    h[78] = 40;
    h[79] = 46;
    h[80] = 42;
    h[81] = 29;
    h[82] = 19;
    h[83] = 36;
    h[84] = 25;
    h[85] = 22;
    h[86] = 17;
    h[87] = 19;
    h[88] = 26;
    h[89] = 30;
    h[90] = 20;
    h[91] = 15;
    h[92] = 21;
    h[93] = 11;
    h[94] = 8;
    h[95] = 8;
    h[96] = 19;
    h[97] = 5;
    h[98] = 8;
    h[99] = 8;
    h[100] = 11;
    h[101] = 11;
    h[102] = 8;
    h[103] = 3;
    h[104] = 9;
    h[105] = 5;
    h[106] = 4;
    h[107] = 7;
    h[108] = 3;
    h[109] = 6;
    h[110] = 3;
    h[111] = 5;
    h[112] = 4;
    h[113] = 5;
    h[114] = 6;
    aa = Array(115);
    for (var a = 1; a != 115;) aa[a] = 1, a++;
    aa[1] = 0;
    aa[9] = 0;
    i = Array(115);
    for (a = 1; a <= 114; a++) i[a] = 0;
    i[2] = 3;
    i[3] = 3;
    i[7] = 4;
    i[10] = 3;
    i[11] = 3;
    i[12] = 3;
    i[13] = 4;
    i[14] = 3;
    i[15] = 3;
    i[19] = 5;
    i[20] = 2;
    i[26] = 3;
    i[27] = 2;
    i[28] = 3;
    i[29] = 3;
    i[30] = 3;
    i[31] = 3;
    i[32] = 3;
    i[36] = 2;
    i[38] = 1;
    i[40] = 2;
    i[41] = 2;
    i[42] = 5;
    i[43] = 2;
    i[44] = 2;
    i[45] = 2;
    i[46] = 2;
    i[50] = 1;
    i[68] = 1;
    j = Array(115);
    j[1] = 5;
    j[2] = 87;
    j[3] = 89;
    j[4] = 92;
    j[5] = 112;
    j[6] = 55;
    j[7] = 39;
    j[8] = 88;
    j[9] = 113;
    j[10] = 51;
    j[11] = 52;
    j[12] = 53;
    j[13] = 96;
    j[14] = 72;
    j[15] = 54;
    j[16] = 70;
    j[17] = 50;
    j[18] = 69;
    j[19] = 44;
    j[20] = 45;
    j[21] = 73;
    j[22] = 103;
    j[23] = 74;
    j[24] = 102;
    j[25] = 42;
    j[26] = 47;
    j[27] = 48;
    j[28] = 49;
    j[29] = 85;
    j[30] = 84;
    j[31] = 57;
    j[32] = 75;
    j[33] = 90;
    j[34] = 58;
    j[35] = 43;
    j[36] = 41;
    j[37] = 56;
    j[38] = 38;
    j[39] = 59;
    j[40] = 60;
    j[41] = 61;
    j[42] = 62;
    j[43] = 63;
    j[44] = 64;
    j[45] = 65;
    j[46] = 66;
    j[47] = 95;
    j[48] = 111;
    j[49] = 106;
    j[50] = 34;
    j[51] = 67;
    j[52] = 76;
    j[53] = 23;
    j[54] = 37;
    j[55] = 97;
    j[56] = 46;
    j[57] = 94;
    j[58] = 105;
    j[59] = 101;
    j[60] = 91;
    j[61] = 109;
    j[62] = 110;
    j[63] = 104;
    j[64] = 108;
    j[65] = 99;
    j[66] = 107;
    j[67] = 77;
    j[68] = 2;
    j[69] = 78;
    j[70] = 79;
    j[71] = 71;
    j[72] = 40;
    j[73] = 3;
    j[74] = 4;
    j[75] = 31;
    j[76] = 98;
    j[77] = 33;
    j[78] = 80;
    j[79] = 81;
    j[80] = 24;
    j[81] = 7;
    j[82] = 82;
    j[83] = 86;
    j[84] = 83;
    j[85] = 27;
    j[86] = 36;
    j[87] = 8;
    j[88] = 68;
    j[89] = 10;
    j[90] = 35;
    j[91] = 26;
    j[92] = 9;
    j[93] = 11;
    j[94] = 12;
    j[95] = 28;
    j[96] = 1;
    j[97] = 25;
    j[98] = 100;
    j[99] = 93;
    j[100] = 14;
    j[101] = 30;
    j[102] = 16;
    j[103] = 13;
    j[104] = 32;
    j[105] = 19;
    j[106] = 29;
    j[107] = 17;
    j[108] = 15;
    j[109] = 18;
    j[110] = 114;
    j[111] = 6;
    j[112] = 22;
    j[113] = 20;
    j[114] = 21;
    O = Array(115);
    for (a = 1; a != 115; a++) O[a] = h[a];
    n = Array(115);
    n[2] = "A.L.M.";
    n[3] = "A.L.M.";
    n[7] = "A.L.M.S.";
    n[10] = "A.L.R.";
    n[11] = "A.L.R.";
    n[12] = "A.L.R.";
    n[13] = "A.L.M.R.";
    n[14] = "A.L.R.";
    n[15] = "A.L.R.";
    n[19] = "K.H.Y.`A.S.";
    n[20] = "T.H.";
    n[26] = "T.S.M.";
    n[27] = "T.S.";
    n[28] = "T.S.M.";
    n[29] = "A.L.M.";
    n[30] = "A.L.M.";
    n[31] = "A.L.M.";
    n[32] = "A.L M.";
    n[36] = "Y.S.";
    n[38] = "S.";
    n[40] = "H.M.";
    n[41] = "H.M.";
    n[42] = "H.M.`A.S.Q.";
    n[43] = "H.M.";
    n[44] = "H.M.";
    n[45] = "H.M.";
    n[46] = "H.M.";
    n[50] = "Q.";
    n[68] = "NuN";
    la = String.fromCharCode(8206);
    ma = String.fromCharCode(8207);
    Da = 1;
    Ea = 4;
    s = 1;
    fa = 16;
    ga = -1;
    ha = 0;
    ia = !0;
    r = p = ja = 0;
    Q = [];
    Q[U(3, 136)] = [8, 5, "\u062c\u064e\u0632\u0670\u0624\u064f\u0647\u064f\u0645"];
    Q[U(7, 38)] = [37, 22, "\u0627\u062f\u0651\u0670\u0631\u064e\u0643\u0648\u0627"];
    Q[U(7, 46)] = [13, 9, "\u0627\u0644\u0623\u064e\u0639\u0631\u0670\u0641\u0650"];
    Q[U(7, 48)] = [12, 3, "\u0627\u0644\u0623\u064e\u0639\u0631\u0670\u0641\u0650"];
    Q[U(7, 66)] = [11, 7, "\u0633\u064e\u0641\u0670\u0647\u064e\u0629\u064d"];
    Q[U(7, 67)] = [3, 6, "\u0633\u064e\u0641\u0670\u0647\u064e\u0629\u064c"];
    Q[U(7, 69)] = [18, 13, "\u0628\u064e\u0633\u0652\u0637\u064e\u0629\u064b"];
    Q[U(7, 133)] = [17, 9, "\u0648\u064e\u0627\u0644\u0636\u0651\u064e\u0641\u0670\u062f\u0650\u0639\u064e"];
    Q[U(7, 145)] = [16, 8, "\u0627\u0644\u0623\u064e\u0644\u0648\u0670\u062d\u0650"];
    Q[U(7, 150)] = [32, 19, "\u0627\u0644\u0623\u064e\u0644\u0648\u0670\u062d\u064e", "\u0627\u0628\u0646\u064e\u0624\u064f\u0645\u0651\u064e"];
    Q[U(7, 154)] = [7, 7, "\u0627\u0644\u0623\u064e\u0644\u0648\u0670\u062d\u064e"];
    Q[U(7, 163)] = [18, 9, "\u062d\u064a\u062a\u0670\u0646\u064f\u0647\u064f\u0645"];
    Q[U(10, 15)] = [32, 13, "\u0621\u0627\u064a\u0670\u062a\u064f\u0646\u0627"];
    Q[U(10, 21)] = [20, 6, "\u0621\u0627\u064a\u0670\u062a\u0650\u0646\u0627"];
    Q[U(13, 4)] = [13, 10, "\u0635\u0650\u0646\u0648\u0670\u0646\u064c", "\u0635\u0650\u0646\u0648\u0670\u0646\u064d"];
    Q[U(13, 5)] = [22, 12, "\u0623\u064e\u0639\u0646\u0670\u0642\u0650\u0647\u0650\u0645"];
    Q[U(13, 14)] = [17, 15, "\u062f\u064f\u0639\u0670\u0624\u064f\u0627\u0652"];
    Q[U(13, 17)] = [40, 24, "\u0627\u0644\u0623\u064e\u0645\u062b\u0670\u0644\u064e"];
    Q[U(2, 31)] = [16, 8];
    Q[U(2, 62)] = [21, 14];
    Q[U(2, 65)] = [6, 6];
    Q[U(2, 81)] = [8, 4];
    Q[U(2, 108)] = [12, 10];
    Q[U(2, 123)] = [10, 6];
    Q[U(2, 145)] = [27, 13];
    Q[U(2, 282)] = [107, 66];
    Q[U(3, 49)] = [35, 18];
    Q[U(3, 66)] = [10, 12];
    Q[U(3, 69)] = [9, 6];
    Q[U(3, 87)] = [9, 8];
    Q[U(3, 120)] = [14, 4];
    Q[U(3, 121)] = [6, 8];
    Q[U(3, 157)] = [5, 8];
    Q[U(3, 158)] = [4, 6];
    Q[U(3, 187)] = [17, 10];
    Q[U(29, 10)] = [25, 19];
    Q[U(29, 20)] = [15, 12];
    Q[U(29, 23)] = [12, 8];
    Q[U(29, 61)] = [9, 11];
    Q[U(29, 63)] = [16, 16];
    Q[U(30, 53)] = [10, 5];
    Q[U(30, 58)] = [15, 12];
    Q[U(31, 12)] = [9, 8];
    Q[U(31, 21)] = [21, 12];
    Q[U(31, 31)] = [9, 11];
    Q[U(31, 32)] = [15, 13];
    Q[U(31, 33)] = [24, 16];
    Q[U(32, 7)] = [5, 5];
    Q[U(32, 9)] = [7, 7];
    Q[U(32, 10)] = [11, 8];
    Q[U(32, 13)] = [11, 10];
    Q[U(32, 15)] = [13, 2];
    Q[U(32, 22)] = [7, 2];
    Q[U(10, 18)] = [17, 17];
    Q[U(10, 27)] = [21, 13];
    Q[U(10, 28)] = [14, 5];
    Q[U(10, 41)] = [7, 7];
    Q[U(10, 49)] = [21, 14];
    Q[U(11, 9)] = [7, 3];
    Q[U(11, 29)] = [21, 12];
    Q[U(11, 35)] = [9, 3];
    Q[U(11, 53)] = [11, 4];
    Q[U(11, 62)] = [19, 5];
    Q[U(11, 74)] = [6, 5];
    Q[U(11, 107)] = [13, 6];
    Q[U(12, 11)] = [10, 6];
    Q[U(12, 29)] = [6, 2];
    Q[U(12, 39)] = [10, 5];
    Q[U(12, 80)] = [23, 16];
    Q[U(12, 82)] = [11, 7];
    Q[U(12, 87)] = [16, 9];
    Q[U(12, 91)] = [9, 8];
    Q[U(12, 97)] = [11, 2];
    Q[U(12, 105)] = [7, 3];
    Q[U(12, 109)] = [24, 17];
    Q[U(14, 18)] = [12, 11];
    Q[U(14, 21)] = [28, 17];
    Q[U(14, 37)] = [15, 10];
    Q[U(14, 38)] = [12, 8];
    Q[U(15, 19)] = [9, 3];
    Q[U(15, 68)] = [6, 3];
    Q[U(13, 29)] = [7, 5];
    Q[U(13, 31)] = [44, 28];
    Q[U(13, 33)] = [19, 21];
    Q[U(13, 36)] = [23, 11];
    Q[U(13, 38)] = [17, 13];
    Q[U(13, 41)] = [16, 7];
    Q[U(7, 90)] = [11, 6];
    Q[U(7, 95)] = [21, 7];
    Q[U(7, 97)] = [11, 2];
    Q[U(7, 101)] = [16, 14];
    Q[U(7, 127)] = [16, 8];
    Q[U(7, 129)] = [14, 7];
    Q[U(7, 131)] = [19, 9];
    Q[U(7, 134)] = [12, 12];
    Q[U(7, 149)] = [13, 8];
    Q[U(7, 165)] = [17, 5];
    Q[U(7, 204)] = [10, 4];
    Q[U(11, 70)] = [15, 8];
    Q[U(30, 21)] = [12, 7];
    Ec();
    Pa = W(Gb(Gb(4)));
    Qa = W(47);
    ta = !0;
    va = ua = !1;
    Va = !0;
    pa = "";
    Ta = window;
    Ma = 100;
    Na = Array(Ma);
    for (a = 0; a != Ma; a++) Na[a] = "";
    M = 0;
    Oa = !1;
    vb()
});
