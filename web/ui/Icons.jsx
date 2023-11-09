export const Icons = {
  // at:           'M256 64C150 64 64 150 64 256s86 192 192 192c18 0 32 14 32 32s-14 32-32 32C115 512 0 397 0 256S115 0 256 0S512 115 512 256v32c0 53-43 96-96 96c-29 0-56-13-73-34C320 371 290 384 256 384c-71 0-128-57-128-128s57-128 128-128c28 0 54 9 75 24c6-5 13-8 21-8c18 0 32 14 32 32v80 32c0 18 14 32 32 32s32-14 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z',
  // bars:         'M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z',
  check:        'M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z',
  // checked:      'M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z',
  clipboard:    'M280 64h40c35 0 64 29 64 64V448c0 35-29 64-64 64H64c-35 0-64-29-64-64V128C0 93 29 64 64 64h40 10C121 28 153 0 192 0s71 28 78 64H280zM64 112c-9 0-16 7-16 16V448c0 9 7 16 16 16H320c9 0 16-7 16-16V128c0-9-7-16-16-16H304v24c0 13-11 24-24 24H192 104c-13 0-24-11-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z',
  github:       'M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z',
  // clock:        'M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 16 11 20l96 64c11 7 26 4 33-7s4-26-7-33L280 243V120c0-13-11-24-24-24s-24 11-24 24z',
  // cross:        'M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z',
  // envelope:     'M64 112c-9 0-16 7-16 16v22L221 292c21 17 50 17 71 0L464 150V128c0-9-7-16-16-16H64zM48 212V384c0 9 7 16 16 16H448c9 0 16-7 16-16V212L322 329c-38 32-94 32-132 0L48 212zM0 128C0 93 29 64 64 64H448c35 0 64 29 64 64V384c0 35-29 64-64 64H64c-35 0-64-29-64-64V128z',
  // exclamation:  'M64 64c0-18-14-32-32-32S0 46 0 64V320c0 18 14 32 32 32s32-14 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z',
  // hide:         'M39 5C28-3 13-1 5 9S-1 35 9 43l592 464c10 8 26 6 34-4s6-26-4-34L526 387c40-41 66-86 80-118c3-8 3-17 0-25c-15-36-46-88-93-131C466 69 401 32 320 32c-68 0-125 26-169 61L39 5zm151 118C226 98 270 80 320 80c65 0 119 30 160 68C518 184 545 226 559 256c-13 28-37 67-71 101l-54-42c9-18 14-38 14-59c0-71-57-128-128-128c-32 0-62 12-84 32l-46-36zM395 284l-82-64c4-9 7-18 7-28c0-6-.7-11-2-16c.7 0 1 0 2 0c44 0 80 36 80 80c0 10-2 19-5 28zm9 130C379 425 351 432 320 432c-65 0-119-30-160-68C122 329 95 286 81 256c8-18 22-42 39-65L83 162C60 191 44 221 35 244c-3 8-3 17 0 25c15 36 46 88 93 131C175 443 239 480 320 480c48 0 90-13 126-33l-42-33zM192 256c0 71 57 128 128 128c13 0 26-2 38-6L302 334c-24-5-43-21-54-42l-56-44c-.2 3-.3 6-.3 9z',
  // info:         'M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-18 14-32 32-32H96c18 0 32 14 32 32V448h32c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H64V256H32c-18 0-32-14-32-32z',
  // key:          'M326,364C312,364 299,362 286,360L267,379C258,387 247,392 235,392C235,392 224,392 224,392L224,403C224,428 204,448 179,448C179,448 168,448 168,448L168,459C168,484 148,504 123,504L53,504C28,504 8,484 8,459L8,389C8,377 13,366 21,357C21,357 152,226 152,226C150,213 148,200 148,186C148,88 228,8 326,8C424,8 504,88 504,186C504,284 424,364 326,364ZM56,456L120,456L120,424C120,411 131,400 144,400L176,400L176,368C176,355 187,344 200,344L234,344L262,316C268,309 278,307 286,310C299,314 312,316 326,316C398,316 456,258 456,186C456,114 398,56 326,56C254,56 196,114 196,186C196,200 198,213 202,226C205,234 203,244 196,250L56,390L56,456ZM364,110C385,110 402,127 402,148C402,169 385,186 364,186C343,186 326,169 326,148C326,127 343,110 364,110Z',
  // lock:         'M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z',
  // login:        'M352 96l64 0c18 0 32 14 32 32l0 256c0 18-14 32-32 32l-64 0c-18 0-32 14-32 32s14 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-18 0-32 14-32 32s14 32 32 32zm-9 183c13-13 13-33 0-45l-128-128c-13-13-33-13-45 0s-13 33 0 45L243 224 32 224c-18 0-32 14-32 32s14 32 32 32l211 0-73 73c-13 13-13 33 0 45s33 13 45 0l128-128z',
  // logout:       'M503 279c13-13 13-33 0-45l-128-128c-13-13-33-13-45 0s-13 33 0 45L403 224 192 224c-18 0-32 14-32 32s14 32 32 32l211 0-73 73c-13 13-13 33 0 45s33 13 45 0l128-128zM160 96c18 0 32-14 32-32s-14-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c18 0 32-14 32-32s-14-32-32-32l-64 0c-18 0-32-14-32-32l0-256c0-18 14-32 32-32l64 0z',
  // pen:          'M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z',
  // plus:         'M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z',
  redo:            'M464 224H472c13 0 24-11 24-24V72c0-10-6-19-15-22s-19-2-26 5L413 97c-88-87-229-86-316 1c-88 88-88 229 0 317s229 88 317 0c13-13 13-33 0-45s-33-13-45 0c-63 63-164 63-226 0s-63-164 0-226c62-62 163-63 225-1L327 183c-7 7-9 17-5 26s13 15 22 15H464z',
  // show:         'M288 80c-65 0-119 30-160 68C90 184 63 226 49 256c14 30 40 73 79 108C169 402 223 432 288 432s119-30 160-68C486 329 513 286 527 256c-14-30-40-73-79-108C407 110 353 80 288 80zM95 113C143 69 207 32 288 32s146 37 193 81c47 44 78 95 93 131c3 8 3 17 0 25c-15 36-46 88-93 131C434 443 369 480 288 480s-146-37-193-81C49 356 17 304 3 268c-3-8-3-17 0-25C17 208 49 156 95 113zM288 336c44 0 80-36 80-80s-36-80-80-80c-.7 0-1 0-2 0c1 5 2 11 2 16c0 35-29 64-64 64c-6 0-11-.7-16-2c0 .7 0 1 0 2c0 44 36 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z',
  // trash:        'M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z',
  // unchecked:    'M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z',
  // undo:         'M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z',
  // unlock:       'M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z',
  // user:         'M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49 464H399c-9-63-63-112-129-112H178c-66 0-120 49-129 112zM0 482C0 384 80 304 178 304h91C368 304 448 384 448 482c0 16-13 30-30 30H30C13 512 0 499 0 482z',
  // warning:      'M256 32c14 0 27 8 35 20l216 368c7 12 7 28 .2 40S486 480 472 480H40c-14 0-28-8-35-20s-7-28 .2-40l216-368C229 40 242 32 256 32zm0 128c-13 0-24 11-24 24V296c0 13 11 24 24 24s24-11 24-24V184c0-13-11-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z',
  // 'circle-check':       'M256,0C397,0 512,115 512,256C512,397 397,512 256,512C115,512 0,397 0,256C0,115 115,0 256,0ZM409,135L409,135C399,126 383,126 373,135L190,319L107,236C97,226 81,226 71,236C62,246 62,262 71,272L172,372C182,382 198,382 208,372L409,171C419,161 419,145 409,135Z',
  // 'circle-exclamation': 'M256,0C397,0 512,115 512,256C512,397 397,512 256,512C115,512 0,397 0,256C0,115 115,0 256,0ZM256,448C275,448 290,433 290,414C290,395 275,379 256,379C237,379 222,395 222,414C222,433 237,448 256,448ZM283,91C283,76 271,64 256,64C241,64 229,76 229,91L229,311C229,326 241,338 256,338C271,338 283,326 283,311L283,91Z',
  // 'circle-info':        'M256,0C397,0 512,115 512,256C512,397 397,512 256,512C115,512 0,397 0,256C0,115 115,0 256,0ZM179,218C179,232 191,243 205,243L230,243L230,397L205,397C191,397 179,408 179,422C179,437 191,448 205,448L307,448C321,448 333,437 333,422C333,408 321,397 307,397L282,397L282,218C282,203 270,192 256,192L205,192C191,192 179,203 179,218ZM218,102C218,123 235,141 256,141C277,141 294,123 294,102C294,81 277,64 256,64C235,64 218,81 218,102Z',
  // 'circle-todo':        'M256,0C397,0 512,115 512,256C512,397 397,512 256,512C115,512 0,397 0,256C0,115 115,0 256,0ZM227,80L227,256C227,265 231,274 239,280L351,360C364,369 382,366 392,353C401,340 398,322 385,312L285,241L285,80C285,64 272,51 256,51C240,51 227,64 227,80Z',
}

export default Icons
