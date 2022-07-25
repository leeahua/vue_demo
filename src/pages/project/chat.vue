<template>
    <div class="col-sm-6" style="border-color:brown;">
      <lemon-imui ref="IMUI"
          :user={user}
          avatar-cricle
          hide-message-name
          hide-message-time         
        > </lemon-imui>
    </div>
</template>

<script>
import UserData from "../database/user";
import ContactsData from "../database/contacts";
import MessagesData from "../database/messages";
import EmojiData from "../database/emoji";
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
    IMUI.initContacts(ContactsData);
    IMUI.initEmoji(EmojiData);
    IMUI.changeContact(13);
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
    handlePullMessages(contact, next) {
      // const { IMUI } = this.$refs;
      setTimeout(() => {
        next(MessagesData[contact.id], true);
      }, 3000);
    },
    handleChangeContact() {},
    handleSend(message, next, file) {
      console.log(message, next, file);
      setTimeout(() => {
        next();
      }, 1000);
    },
  },
}
</script>

<style>

</style>