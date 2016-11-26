export default function ({ types: t }) {

  const wrapVisitor = {

    ObjectExpression(path) {

      path.replaceWith(
        t.callExpression(t.identifier("Object.freeze"), [ path.node ])
      );

      path.stop();
    }
  };

  return {
    visitor: {
      VariableDeclaration(path) {
        const varDeclaration = path.node.declarations[0];
        const name = varDeclaration.id.name;

        path.traverse(wrapVisitor, { name });
      }
    }
  }
}
