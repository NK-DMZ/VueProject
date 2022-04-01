<template>
  <div>
    <div id="equipment" class="equipment"></div>
    <div class="duty">
      <el-table :data="contact" style="color: #000000; ">
        <el-table-column prop="date" label="日期"  />
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="telephone" label="联系电话" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ECharts, EChartsOption, init } from 'echarts';
import { onMounted, reactive} from 'vue';

const props = defineProps(
  {
    equipment: {
      type: Object as any,
      default: () => {}
    },
    contact: {
      type: Object as any,
      default: () => {}
    },
  }
)

const data = reactive({
  normal: props.equipment.normal,
  abnormal: props.equipment.abnormal,
});

let equipmentObj: ECharts
function getHtml() {
  const equipmentchart = document.getElementById('equipment') as HTMLElement;
  equipmentObj = init(equipmentchart,);
  equipmentObj.setOption(equipmentoption);
}

const equipmentoption: EChartsOption = {
  title: {
    text: '设备运行状况',
    left: 'left',
    textStyle: {
      color: '#ffffff'
    },
  },
  color: ['green', 'red',],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '1%',
    left: 'right',
    orient: 'vertical',
    textStyle: {
      color: '#ffffff'
    },
  },
  series: [
    {
      name: 'Equipment Condition(设备运行状况)',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '15',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: data.normal, name: '正常（ normal ）' },
        { value: data.abnormal, name: '异常（ abnormal ）' },
      ]
    }]
};

onMounted(() => {
  getHtml()
});

</script>

<style scoped>
#equipment {
  width: calc(50vh);
  height: calc(20vh);
  /* background-color:#8424af; */
  margin: 0 auto;
  color: aliceblue;
}
.duty{
  width: 90%;
  margin: 0 auto;
  opacity: 0.4;
}
</style>