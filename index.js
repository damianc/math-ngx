(function () {
  const {
    sin,cos,tan,
    asin,acos
  } = Math;

  Math.ngx = {
    // excosecant
    exc: x => (1/sin(x))-1,
    aexc: x => asin(1/(x+1)),

    // exsecant
    exs: x => (1/cos(x))-1,
    aexs: x => acos(1/(x+1)),

    // versin
    ver: x => 1-cos(x),
    aver: x => acos(1-x),

    // coversin
    cvs: x => 1-sin(x),
    acvs: x => asin(1-x),

    // vercos
    vcs: x => 1+cos(x),
    avcs: x => acos(x-1),

    // covercos
    cvc: x => 1+sin(x),
    acvc: x => asin(x-1),

    // haversin
    hav: x => (1-cos(x))/2,
    ahav: x => acos(1-2*x),

    // hacoversin
    hcv: x => (1-sin(x))/2,
    ahcv: x => asin(1-2*x),

    // havercos
    hvc: x => (1+cos(x))/2,
    ahvc: x => acos(2*x-1),

    // hacovercos
    hcc: x => (1+sin(x))/2,
    ahcc: x => asin(2*x-1)
  };
})();
