import {v4 as uuidV4} from "uuid"

class Person {
  constructor(name,unread, seen, dp = null,status=null, xuv = true) {
    this.id = uuidV4();
    this.name = name;
    this.dp = dp;
    this.unread = unread;
    this.lastSeen = seen;
    this.conversation=[];
    this.end="";
    this.status=status;
    this.isStatusImage = xuv;
  }

  setMsg(msg, mySide, time) {
    this.conversation.push({msg, mySide, time});
    this.end = msg;
  }
}
let chats = [];
export const defaultStatus = new Person('My status', 0, 'Tap to add status update');

chats.push(new Person('Ujjawal Singh', 2, '7:00 pm',"images/me.jpg", "images/myStatus.mp4", false));
chats.push(new Person('Sasuke', 1, "1:00 am", 'images/sasuke.jpg'));
chats.push(new Person('Elon musk', 2, '5:00 pm',"images/emusk.jpg", "images/eloneStat.jpg", true));
chats.push(new Person('NO Name', null, '5:00 pm'));
chats.push(new Person('NO Name', null, '5:00 pm'));
chats.push(new Person('NO Name', null, '5:00 pm'));
chats.push(new Person('NO Name', null, '5:00 pm'));
chats.push(new Person('NO Name', null, '5:00 pm'));
chats.push(new Person('NO Name', null, '5:00 pm'));
chats.push(new Person('NO Name', null, '5:00 pm'));
chats.push(new Person('NO Name', null, '5:00 pm'));


chats[0].setMsg("Hello Developer", true, "4:20 pm");
chats[0].setMsg("Hey, Welcome in my project", false, "4:20 pm");
chats[0].setMsg("I make this Whatsapp clone", false, "4:57 pm");
chats[0].setMsg("Ok Ok", true, "4:57 pm");
chats[0].setMsg("Actually, I am CEO of Google", true, "4:57 pm");
chats[0].setMsg("And, I am very Impressed by your skill and wants to Hire you", true, "4:57 pm");
chats[0].setMsg("Yes, Ofcourse I also want an job", false, "4:57 pm");
chats[0].setMsg("I just need little push and I will be a great employee", false, "4:57 pm");
chats[0].setMsg("Yes,Why not", true, "4:57 pm");
chats[0].setMsg("Can, You send me your Resume", true, "4:57 pm");
chats[0].setMsg("Wait", false, "4:57 pm");
chats[0].setMsg(760, false, "4:57 pm");
chats[0].setMsg("I like it", true, "4:57 pm");

chats[1].setMsg(`Mene Itachi DEkha hai ghumta hua`, true, "4:57 pm");
chats[1].setMsg(`Tumhe pta hai kya ITACHI kha milega???`, false, "4:57 pm");

chats[2].setMsg(`Need you to make it X`, false, "4:57 pm");
chats[2].setMsg(`On it`, true, "4:57 pm");
chats[2].setMsg(`And when you say make it X, just to clarify, you mean...`, true, "4:57 pm");
chats[2].setMsg(`Twitter`, false, "5:20 pm");
chats[2].setMsg(`Right`, true, "5:20 pm");
chats[2].setMsg(`Sorry just one more thing. What you mean make it X`, true, "5:20 pm");
chats[2].setMsg(`A Sphincter says What?`, false, "5:20 pm");
chats[2].setMsg(`What?`, true, "5:30 pm");
chats[2].setMsg(`🤣🤣😂`, false, "6:45 pm");
chats[2].setMsg(`Make it X now or you are fired`, false, "6:45 pm");

chats[3].setMsg(`I can't think any intresting conversation`, false, "6:45 pm");
chats[4].setMsg(`I can't think any intresting conversation`, false, "6:45 pm");
chats[5].setMsg(`I Just add this to make list longer. so, that you can scroll`, false, "6:45 pm");
chats[6].setMsg(`I Just add this to make list longer. so, that you can scroll`, false, "6:45 pm");
chats[7].setMsg(`I Just add this to make list longer. so, that you can scroll`, false, "6:45 pm");
chats[8].setMsg(`I can't think any intresting conversation`, false, "6:45 pm");
chats[9].setMsg(`I can't think any intresting conversation`, false, "6:45 pm");

export default chats;