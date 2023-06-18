import styled from '@emotion/native';

export const ContainerComments = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: space-between;
  padding-horizontal: 15px;
`;

export const WrapperComments = styled.SafeAreaView`
  height: 280px;
`;

export const СommentContainer = styled.View`
  padding: 16px;
  margin-bottom: 24px;
  margin-right: 24px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.03);
  border-width: 1px;
`;
export const СommentTime = styled.Text`
  text-align: right;
  color: #bdbdbd;
`;

export const MyСommentContainer = styled.View`
  padding: 16px;
  margin-bottom: 24px;
  margin-left: 24px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.03);
  border-width: 1px;
`;
export const MyСommentTime = styled.Text`
  text-align: left;
  color: #bdbdbd;
`;

export const ImagePost = styled.Image`
  height: 240px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 32px;
`;
export const InputComment = styled.TextInput`
  margin-bottom: 16px;
  padding: 16px;
  height: 50px;
  font-size: 16px;
  color: #212121;
  background-color: #f6f6f6;
  border-radius: 100px;
  border-width: 1px;
  border-color: #e8e8e8;
`;

export const UserName = styled.Text`
  font-style: normal;
  font-size: 13px;
  color: #bdbdbd;
`;

export const ButtonComment = styled.TouchableOpacity`
  position: absolute;
  left: 84%;
  top: 85.5%;
  margin-horizontal: 25px;
  margin-top: 32px;
  margin-bottom: 30px;
  background-color: #ff6c00;
  height: 35px;
  width: 35px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
