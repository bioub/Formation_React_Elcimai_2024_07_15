type Props = {
  name: string;
}

function HelloWorld({ name }: Readonly<Props>) {
  return (
    <div className="HelloWorld" data-test-id='testID'>
      Hello {name} !
    </div>
  );
}

export default HelloWorld;
