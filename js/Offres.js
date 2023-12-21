

function SideBarShowHide() {
    let sb = document.querySelector(".sidebar");
    if (sb.style.marginLeft == '-500px') {sb.style.marginLeft = '0px';
    document.body.style.overflowY = 'hidden';

}
    else {
        sb.style.marginLeft = '-500px';
        document.body.style.overflowY = 'auto';

    }


}

