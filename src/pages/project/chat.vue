<template>
    <div class="col-sm-6" style="border-color:brown;">
      <lemon-imui ref="IMUI"
          :user={user}
          avatar-cricle
          hide-message-name
          hide-message-time
          @pull-messages='handlePullMessages'
          @send='handleSend'
          @change-contact='handleChangeContact'
          @message-click='handleMessageClick'
          @menu-navatar-click='handleMenuNavatarClick'
          @change-menu='handleChangeMenu'       
        > </lemon-imui>
    </div>
</template>

<script>
import UserData from "../database/user";
import ContactsData from "../database/contacts";
import MessagesData from "../database/messages";
import EmojiData from "../database/emoji";
import 'lemon-imui/dist/index.css';
export default {
  name: 'Chat',
  data: function(){
    return {
      user: UserData,
      message: MessagesData
    }
  },
  mounted() {
    const IMUI = this.$refs.IMUI;
    //初始化联系人
    IMUI.initContacts(ContactsData);
    //初始化表情
    IMUI.initEmoji(EmojiData);
  },
  methods: {
    openDrawer(position) {
      const IMUI = this.$refs.IMUI;
      const params = {
        position,
        render: contact => {
          return (
            <div style="padding:15px">
              <h5>{contact.displayName}</h5>
              <span on-click={IMUI.closeDrawer}>关闭抽屉</span>
            </div>
          );
        },
      };
      if (position == "center") {
        params.width = "50%";
        params.height = "50%";
      } else if (position == "rightInside") {
        params.height = "90%";
        params.offsetY = "10%";
      }
      IMUI.openDrawer(params);
    },
    handleMessageClick(event,key,Message,instance){
      console.log('handleMessageClick',event, key,Message,instance)
    },
    handleMenuNavatarClick(contact){
      console.log('handleMenuNavatarClick',contact)
    },
    handleChangeMenu(menuName){
      console.log('handleChangeMenu',menuName)
    },
    handlePullMessages(contact, next) {
      //从后端请求消息数据，包装成下面的样子
      console.log('message pull', this.user)
      const messages = [{
        id: '112121',
        status: 'succeed',
        type: 'text',
        sendTime: 1566047865417,
        content: '你什么才能对接完？',
        toContactId: contact.id,
        fromUser: this.user
      }]
      //将第二个参数设为true，表示已到末尾，聊天窗口顶部会显示“暂无更多消息”，不然会一直转圈。
      next(messages,true);
    },
    handleChangeContact(contact) {
      console.log('Contact change',contact)
    },
    handleSend(message, next, file) {
      console.log('send',message, next, file)
      setTimeout(() => {
        next();
      }, 1000);
    },
  },
}
</script>

<style>

</style>