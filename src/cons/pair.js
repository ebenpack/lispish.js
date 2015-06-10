function pair(c){
    try {
        return 'car' in c && 'cdr' in c;
    } catch(e) {
        return false;
    }
}

module.exports = pair;
