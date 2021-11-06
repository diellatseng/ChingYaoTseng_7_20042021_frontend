<template>
    <div id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col">
                    {{ defaultData }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button @click="emitData">Emit Data</button>
                </col>
            </div>
        </div>
    </div>
</template>
<script>
import { defaultData } from "@/mixins/defaultDataMixin"

export default {
    mixins: [defaultData],
   
    data() {
        return {
            text: "Hello, world!"
        };
    },
    methods: {
        emitData() {
            this.$emit('emitted-text', this.text);
        }
    },
    // Let's watch for the user state to change 
    watch: {
        firstName(newValue, oldValue) {
            console.log('[state] firstName state changed to: ', newValue);
            // Do whatever you want with that information 
        }
    }
}
</script>