/**
 * Created by zouwengfeng on 17/8/4.
 */
export const openFile=(name,accept)=>{
  var input=document.createElement('input');
  input.type='file';
  input.name=name;
  input.accept=accept;
  input.click();
  return input;
}
