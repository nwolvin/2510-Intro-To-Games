class Cookie{
    static getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookieSplits = decodedCookie.split(';');
        for(const element of cookieSplits) {
            let c = element;
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    static setCookie(cname, cvalue) {
      document.cookie = cname + "=" + cvalue + ";" + "path=/";
    }
    
  }
  
  window.Cookie = Cookie
  export default Cookie;