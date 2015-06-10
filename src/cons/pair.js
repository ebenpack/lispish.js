function pair(c){
    try {
        'car' in c && 'cdr' in c;
    } catch(e) {
        return false;
    }
}

module.exports = pair;
