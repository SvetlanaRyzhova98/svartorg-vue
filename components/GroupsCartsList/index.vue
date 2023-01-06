<template>
        <GroupSelector :modelValue="currentType"
  @update:modelValue="currentType = $event" />

        <div class="cards instrumental">
            <GroupItem v-for="(item, j) in filteredGroups" :key="j" :item="item" />
        </div>
</template>


<style>

</style>

<script>
import GroupSelector from './components/GroupSelector';
import GroupItem from './components/GroupItem';

import weldingImg from './assets/1.jpg';
import electroImg from './assets/electro1.jpg';
import bensoImg from './assets/benso.jpeg';
import weldingGasImg from './assets/gas.jpg';
import compressorImg from './assets/compress.jpg';

import protectImg from './assets/sredstva_individualnoy_zashchity_1.jpg';
import materialyImg from './assets/svarochnye_materialy_1.jpg';

export default {
  name: 'GroupsCartsList',
  components: {GroupSelector, GroupItem},
  props: {},
  computed: {
    filteredGroups() {
        return this.groups.filter((group) => (group.type === this.currentType));
    }
  },
  data() {
    return {
        currentType: 'main',
        groups: [
            {
                caption: 'сварочное оборудование',
                imageSrc: weldingImg,
                href: '/catalog/welding',
                type: 'main'
            },
            {
                caption: 'электроинструмент',
                imageSrc: electroImg,
                href: '/catalog/electro',
                type: 'main'
            },
            {
                caption: 'бензоинструмент',
                imageSrc: bensoImg,
                href: '/catalog/benzo',
                type: 'main'
            },
            {
                caption: 'газосварочное',
                imageSrc: weldingGasImg,
                href: '/catalog/gas',
                type: 'main'
            },
            
            {
                caption: 'Компрессоры и пневмоинструмент',
                imageSrc: compressorImg,
                href: '/catalog/compressor',
                type: 'main'
            },
            

            {
                caption: 'средства защиты',
                imageSrc: protectImg,
                href: '/catalog/protection',
                type: 'secondary'
            },
            {
                caption: 'сварочные материалы',
                imageSrc: materialyImg,
                href: '/catalog/materials',
                type: 'secondary'
            },
        
        ]
    };
  }
}
</script>
