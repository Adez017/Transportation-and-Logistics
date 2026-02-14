function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access only"
    });
  }
  next();
}

function requireTester(req, res, next) {
  if (req.user.role !== "tester") {
    return res.status(403).json({
      success: false,
      message: "Tester access only"
    });
  }
  next();
}


/*  NEW GENERIC RBAC FUNCTION */
function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You are not authorized."
      });
    }

    next();
  };
}

module.exports = { requireAdmin, requireTester, authorizeRoles };
