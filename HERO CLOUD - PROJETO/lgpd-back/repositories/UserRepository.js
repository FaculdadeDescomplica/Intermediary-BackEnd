import User from "../models/User.js";

//1- salvar usuario
const saveUser = async (UserModel) => {
    const save = await User.create(UserModel);
    return save;
  }
  
  //2- buscar todos usuarios
  const getAllUsers = async () => {
    return await User.findAll({
      order: [
        ['id', 'ASC']
      ]
    });
  };
  
  //3- buscar por id
  const getUserById = async (id) => {
    return await User.findByPk(id); //primary key
  };
  
  //4- deletar por id
  const deleteUserById = async (id) => {
    return await User.destroy({ where: { id: id } }); 
    //primeiro é o atributo do banco segundo é o parametro da função
  };
  
  //5- atualizar por id
  const updateUserById = async (id, UserModel) => {
    try {
      const result = await User.update(UserModel, { where: { id: id } });
      //primeiro é o atributo do banco segundo é o parametro da função
      if (result[0] === 1) {
        return { message: "User updated with success" };
      } else {
        return { message: `Can't find User ${id} to update`, status: 404 };
      }
    } catch (error) {
      return error;
    }
  };

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};


export default factory;