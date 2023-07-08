import styled from 'styled-components-vue';
const Wrapper = styled.div``;

export default {
  render() {
    return (
      <Wrapper>
        <div> 1231231231351</div>
      </Wrapper>
    );
  },
  data() {
    return {
      msg: 'hello,jsx!',
      index: 0,
      img: '',
      value: '',
      dataList: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    };
  },
};
