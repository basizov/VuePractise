import { defineComponent, PropType } from "vue";

export default  defineComponent({
  props: {
    show: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false);
    }
  }
});
