/*const text = 'Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and ' +
    '920462 ' +
    'my sun number 0683390791. Please use same country code +38 to have opportunity to call me'

const regexy = /(\+?)\d+[0-9\-)(\s]+\d/g

console.log(text.match(regexy))*/

const message = ':apple::apple:<@KATE / >:apple:<@VIKTOR/ >:apple::apple:<@SERGEY/><@Dima />:apple::apple:' +
    '<@viktor/><@Kate /><@Max/><@alisa /> :like: received:apple::apple::apple: this is so cool:apple: ' +
    '<@oleg/>:like:apple:like:!'


function countEmojies(message, emoji) {
    const reg = new RegExp(`((?<=<@)\\w+)|(:${emoji}:)`,`g`);
    let count = 0;
    let userMatched = false;
    let res ={};
    message.match(reg).reduceRight((acc,match)=>{
            if (match===`:${emoji}:`){
                if (userMatched){
                    count = 0;
                    userMatched = false;
                }
                count++;
            } else {
                userMatched = true;
                let user = match.toLowerCase()
                if (res[user]){
                    res[user] += count;
                } else  {
                    res[user] = count
                }

            }
        });
    return res;

}

console.log(countEmojies(message, 'apple'));